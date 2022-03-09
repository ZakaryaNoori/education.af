<template>
  <div class="main_content">
    <div class="container md:space-y-10 space-y-5">
      <!--  slider -->
      <div class="mt-3">
        <h4 class="py-3 border-b font-semibold text-grey-700 mx-1 mb-4">
          You can see your courses here
        </h4>

        <div class="relative" uk-slider="finite: true">
          <div class="uk-slider-container px-1 py-3">
            <ul
              class="
                uk-slider-items
                uk-child-width-1-3@m
                uk-child-width-1-2@s
                uk-grid-small
                uk-grid
              "
              v-if="!loading"
            >
              <li v-for="course in courses" :key="course.id">
                <router-link
                  :to="'/courses/' + course.id"
                  class="uk-link-reset block h-full"
                  tag="a"
                >
                  <div class="card uk-transition-toggle h-full flex flex-col">
                    <div class="card-media h-40">
                      <div class="card-media-overly"></div>
                      <img
                        src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/courses/img-1.jpg"
                        alt=""
                        class=""
                      />
                      <span class="icon-play"></span>
                    </div>
                    <div class="card-body p-4 flex-grow flex flex-col">
                      <div class="font-semibold line-clamp-2">
                        {{ course.title }}
                      </div>
                      <div class="flex space-x-2 items-center text-sm pt-3">
                        <div>
                          {{ course.lecturesCount }}
                          lectures
                        </div>
                      </div>
                      <div
                        class="pt-1 flex justify-between flex-grow items-end"
                      >
                        <div
                          class="
                            text-xs
                            font-semibold
                            bg-indigo-100
                            text-indigo-900
                            px-2
                            py-1
                            rounded-full
                          "
                          v-if="course.isEnrolled"
                        >
                          'enrolled'
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
            <h1 v-else>Hello</h1>

            <!-- slide icons -->
            <a
              class="
                absolute
                bg-white
                top-1/4
                flex
                items-center
                justify-center
                p-2
                -left-4
                rounded-full
                shadow-md
                text-xl
                w-9
                z-10
                dark:bg-gray-800 dark:text-white
              "
              href="#"
              uk-slider-item="previous"
            >
              <i class="icon-feather-chevron-left"></i
            ></a>
            <a
              class="
                absolute
                bg-white
                top-1/4
                flex
                items-center
                justify-center
                p-2
                -right-4
                rounded-full
                shadow-md
                text-xl
                w-9
                z-10
                dark:bg-gray-800 dark:text-white
              "
              href="#"
              uk-slider-item="next"
            >
              <i class="icon-feather-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      courses: [],
      loading: true,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.fetchMyCourses();
  },
  methods: {
    fetchMyCourses() {
      this.$http
        .get("/courses?user=" + this.user.id)
        .then((res) => {
          this.courses = res.data.docs;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        })
    },
  },
};
</script>
