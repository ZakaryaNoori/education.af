<template>
  <div class="main_content" v-if="!loading">
    <!-- course preview details -->
    <div class="bg-gradient-to-tr from-pink-500 to-red-500 text-white">
      <div class="container p-0">
        <div class="lg:flex items-center lg:space-x-12 lg:py-10 p-4">
          <div class="lg:w-4/12">
            <div
              class="
                w-full
                h-44
                overflow-hidden
                rounded-lg
                relative
                lg:mb-0
                mb-4
              "
            >
              <img
                v-if="course"
                :src="'http://localhost:3000/api/attachments/' + course.image"
                alt=""
                class="w-full h-full absolute inset-0 object-cover"
              />
            </div>
          </div>
          <div class="lg:w-8/12">
            <h1
              class="
                lg:leading-10 lg:text-2xl
                text-white text-xl
                leading-8
                font-semibold
              "
            >
              {{ course && course.title }}
            </h1>
            <p class="line-clamp-2 mt-3 md:block hidden">
              {{ course && course.description.slice(0, 101) }}...
            </p>
            <p class="mt-3 flex items-center">
              {{ course && course.likesCount }} likes
              <span class="lg:block hidden mx-3 text-2xl">·</span>
              {{ course && course.enrollmentsCount }} Enrollments
            </p>
            <ul class="lg:flex items-center text-gray-100 mt-3 opacity-90">
              <li>
                Created by
                <a
                  href="#"
                  class="text-white fond-bold hover:underline hover:text-white"
                >
                  {{ course && course.user.name }}
                </a>
              </li>
              <span class="lg:block hidden mx-3 text-2xl">·</span>
              <li>
                Last updated
                {{ course && createUpdatedAtReadable(course.updatedAt) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--  course tabs -->
    <div
      class="bg-white border-b z-20 mb-4 overflow-hidden"
      uk-sticky="media: 992; offset:70"
    >
      <div class="mcontainer py-0 lg:px-20 flex justify-between items-center">
        <nav class="cd-secondary-nav nav-smal l flex-1">
          <ul class="space-x-3" uk-scrollspy-nav="closest: li; scroll: true">
            <li>
              <a @click="scrollToElement('overview')" class="cursor-pointer"
                >Overview</a
              >
            </li>
            <li>
              <a @click="scrollToElement('curriculum')" class="cursor-pointer"
                >Lectures</a
              >
            </li>
            <li>
              <a @click="scrollToElement('announcement')" class="cursor-pointer"
                >Announcement</a
              >
            </li>
            <li>
              <a @click="scrollToElement('comments')" class="cursor-pointer"
                >comments</a
              >
            </li>
          </ul>
        </nav>

        <div class="flex space-x-3 mr-2" v-if="!isMyCourse()">
          <a
            href="javascript:void(0)"
            @click="enroll()"
            v-if="course && !course.isEnrolled"
            class="
              flex
              items-center
              justify-center
              h-9
              px-6
              rounded-md
              bg-blue-600
              text-white
              hover:text-white
            "
          >
            Enroll Now
          </a>
          <a
            href="javascript:void(0)"
            @click="decline()"
            v-else
            class="
              flex
              items-center
              justify-center
              h-9
              px-6
              rounded-md
              bg-red-600
              text-white
              hover:text-white
            "
          >
            Decline course
          </a>
        </div>
        <div v-if="lectures.length > 0">
          <router-link
            v-if="course.isEnrolled || isMyCourse()"
            :to="this.$route.params.id + '/lectures/' + lectures[0]._id"
          >
            <a
              href="javascript:void(0)"
              class="
                flex
                items-center
                justify-center
                h-9
                px-6
                rounded-md
                bg-blue-600
                text-white
                hover:text-white
              "
            >
              Go to lectures
            </a>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container p-0">
      <div class="space-y-5 lg:w-9/12 mx-auto">
        <!-- course description -->
        <div class="tube-card p-5 lg:p-8" id="overview">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">Description</h3>
              <p>
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- course Curriculum -->
        <div id="curriculum">
          <div class="flex items-center justify-between mb-5">
            <h3 class="text-xl font-semibold">Course Lectures</h3>
            <router-link
              :to="`/add-lecture/${course._id}`"
              class="button"
              v-if="isMyCourse()"
              >Add lecture</router-link
            >
          </div>
          <ul
            uk-accordion="multiple: true"
            class="tube-card p-4 divide-y space-y-3"
          >
            <li class="uk-open">
              <div class="uk-accordion-content text-base mt-0">
                <ul class="course-curriculum-list font-medium" v-if="lectures.length > 0">
                  <li
                    class="
                      hover:bg-gray-100
                      p-2
                      flex
                      rounded-md
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                    "
                    v-for="lecture in lectures"
                    :key="lecture.id"
                  >
                    <div class="flex items-center">
                      <ion-icon
                        name="play-circle"
                        class="text-2xl mr-2"
                      ></ion-icon>
                      <span v-text-terminate="62">{{ lecture.title }}</span>
                    </div>
                    <div>
                      <ion-icon
                        name="trash"
                        v-if="isMyCourse()"
                        @click="removeLecture(lecture._id)"
                      ></ion-icon>
                      <ion-icon name="arrow-forward-outline" v-else></ion-icon>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <!-- course Announcement -->
        <div
          id="announcement"
          class="tube-card p-5 lg:p-8"
          v-if="course.announcements.length > 0 || isMyCourse()"
        >
          <div
            class="flex items-center justify-between"
            :class="{ 'mb-5': course.announcements.length > 0 }"
          >
            <h3 class="text-xl font-semibold">Announcement</h3>
            <a
              class="button gray"
              href="#modal-example"
              uk-toggle
              v-if="isMyCourse()"
              >Add Announcement</a
            >
          </div>

          <div class="space-y-5">
            <div
              v-for="announcement in course.announcements"
              :key="announcement.id"
            >
              <h4 class="font-medium mb-2 text-lg">
                {{ announcement.title }}
              </h4>
              <p>
                {{ announcement.content }}
              </p>
            </div>
          </div>

          <!-- This is the modal -->
          <div id="modal-example" uk-modal>
            <div class="uk-modal-body uk-modal-dialog rounded-md shadow-2xl">
              <h2 class="uk-modal-title mb-5">Add announcement</h2>
              <div class="mb-3">
                <label for="" class="text-sm mb-1">title</label>
                <input
                  type="text"
                  class="with-border"
                  v-model="title"
                  placeholder="e.g. Ready assignments"
                />
              </div>
              <div>
                <label for="" class="text-sm mb-1">Content</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  v-model="content"
                  class="with-border p-3"
                ></textarea>
              </div>
              <div
                class="
                  uk-modal-footer
                  text-right
                  mt-6
                  px-0
                  space-x-1
                  pb-0
                  border-transparent
                "
              >
                <button class="button gray uk-modal-close" type="button">
                  Cancel
                </button>
                <button
                  class="button"
                  type="button"
                  @click="postAnnouncements()"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- course Curriculum -->
        <div id="comments">
          <div class="flex items-center justify-between mb-5">
            <h3 class="text-xl font-semibold">Comments</h3>
          </div>
          <div class="tube-card p-5">
            <div class="mb-5 space-y-2">
              <div
                v-for="comment in course.comments"
                :key="comment.id"
                class="bg-gray-50 border p-4 relative rounded-md"
              >
                <p class="text-gray-800">{{ comment.content }}</p>
                <div class="text-xs text-gray-500">
                  {{ createUpdatedAtReadable(comment.createdAt) }}
                </div>
              </div>
            </div>
            <div v-if="course.isEnrolled">
              <div>
                <textarea
                  name="comments"
                  id=""
                  cols="30"
                  rows="3"
                  class="with-border p-3"
                  v-model="comment"
                ></textarea>
              </div>
              <div class="flex mt-2 justify-end">
                <button class="button" @click="submitComment()">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="lg:mt-28 mt-10 mb-7 px-12 border-t pt-7">
      <div
        class="
          flex flex-col
          items-center
          justify-between
          lg:flex-row
          max-w-6xl
          mx-auto
          lg:space-y-0
          space-y-3
        "
      >
        <p class="capitalize font-medium">© copyright 2021 Education.af</p>
        <div class="lg:flex space-x-4 text-gray-700 capitalize hidden">
          <a href="#"> About</a>
          <a href="#"> Help</a>
          <a href="#"> Terms</a>
          <a href="#"> Privacy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
        user: {
          id: null,
        },
        announcements: [],
      },
      lectures: [],
      title: "",
      content: "",
      loading: true,
      comment: "",
    };
  },
  mounted() {
    this.fetchCourse();

    this.fetchCourseLectures();
  },
  methods: {
    fetchCourse() {
      this.$http
        .get("courses/" + this.$route.params.id)
        .then((res) => {
          this.course = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    enroll() {
      this.$http
        .post("/courses/" + this.$route.params.id + "/enrollments")
        .then((res) => {
          UIkit.notification({
            message: "You have successfully enrolled the course.",
            pos: "top-right",
            status: "success",
          });
          this.course.isEnrolled = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    decline() {
      this.$http
        .delete("/courses/" + this.$route.params.id + "/enrollments")
        .then((res) => {
          UIkit.notification({
            message: "Course successfully declined.",
            pos: "top-right",
            status: "success",
          });
          this.course.isEnrolled = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    createUpdatedAtReadable(d) {
      const date = new Date(d);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    },

    fetchCourseLectures() {
      this.$http
        .get("lectures?course=" + this.$route.params.id)
        .then((res) => {
          this.lectures = res.data.docs;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    postAnnouncements() {
      this.$http
        .post("/courses/" + this.$route.params.id + "/announcements", {
          title: this.title,
          content: this.content,
        })
        .then((res) => {
          UIkit.notification({
            message: "Announcement successfully posted.",
            pos: "top-right",
            status: "success",
          });
          // close modal
          document.getElementById("modal-example").classList.remove("uk-open");
          // clear form
          this.title = "";
          this.content = "";

          this.fetchCourse();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    isMyCourse() {
      return this.course.user.id == this.$store.state.user.user.id;
    },

    submitComment() {
      this.$http
        .post("/courses/" + this.$route.params.id + "/comments", {
          content: this.comment,
        })
        .then((res) => {
          // clear form
          this.comment = "";
          this.fetchCourse();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    scrollToElement(id) {
      let el = document.getElementById(id);
      // scroll with offset
      console.log(el);
      let y = el.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    },

    removeLecture(id) {
      this.$http
        .delete("/lectures/" + id)
        .then((res) => {
          UIkit.notification({
            message: "Lecture successfully deleted.",
            pos: "top-right",
            status: "success",
          });
          this.fetchCourseLectures();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
