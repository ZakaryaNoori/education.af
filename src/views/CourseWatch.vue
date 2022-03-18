<template>
  <div class="course-watch">

    <transition name="fade-in">
      <router-view></router-view>
    </transition>
    <!-- sidebar -->
    <div class="sidebar bg-white">
        <!-- slide_menu for mobile -->
        <span class="btn-close-mobi right-3 left-auto"></span>

        <!-- back to home link -->
        <div class="flex justify-between lg:-ml-1 mt-1 mr-2">
            <router-link :to="`/courses/${this.$route.params.id}`" class="flex items-center text-blue-500">
                <ion-icon name="chevron-back-outline" class="md:text-lg text-2xl"></ion-icon>  
                <span class="text-sm md:inline hidden"> back</span>
            </router-link>
        </div>

        <!-- title -->
        <h1 class="lg:text-2xl text-lg font-bold mt-2 line-clamp-2"> {{ course.title }} </h1>
        <nav class="cd-secondary-nav nav-small extanded w-auto lg:block hidden">
            <ul>
                <li :class="{ 'uk-active' : activeTab == 'overview' }"><a href="#" class="lg:px-2 border-b-2 border-transparent" @click="changeTab('overview')">   Overview </a></li>
                <li :class="{ 'uk-active' : activeTab == 'description' }"><a href="#" class="lg:px-2 border-b-2 border-transparent" @click="changeTab('description')">  Description  </a></li> 
                <li :class="{ 'uk-active' : activeTab == 'comments' }"><a href="#" class="lg:px-2 border-b-2 border-transparent" @click="changeTab('comments')"> Comments  </a></li> 
            </ul>
        </nav>

        <hr class="-mx-6 lg:block hidden"> 

        <!-- sidebar list -->
        <div class="sidebar_inner" data-simplebar>
            
            <div id="course-tabs" class="relative">
              <transition-group name="show-in" mode="out-in">
                  <div id="curriculum" v-if="activeTab == 'overview'" key="1"> 
                      <div class="divide-y space-y-3">
                          <div class="uk-open">
                              <div class="uk-accordion-content mt-0">
                                  <!-- <ul class="course-curriculum-list" uk-switcher="connect: #video_tabs; animation: uk-animation-fade"> -->
                                  <ul class="course-curriculum-list">
                                      <li v-for="lecture in lectures" :key="lecture.id" :class="{ 'uk-active': lecture._id == activeLecture._id }">
                                          <router-link :to="lecture._id" href="#">
                                            {{ lecture.title }}
                                          </router-link>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--  Overview -->
                  <div class="space-y-6" v-if="activeTab == 'description'" key="2">
                      <div>
                          <h3 class="text-lg font-semibold mb-1"> Description </h3>
                          <p>
                            {{ activeLecture.description }}
                          </p>
                      </div>
                  </div>
                  <!--  Announcements -->
                  <div class="px-2 py-3 space-y-3" v-if="activeTab == 'comments'" key="3">
                    <div v-for="comment in course.comments" :key="comment.id" class="py-2 px-3 rounded bg-gray-100 text-gray-800">
                      {{ comment.content }}
                      <div class="text-sm text-blue-500 mt-2">
                        @{{ comment.user.name }} - {{ createUpdatedAtReadable(comment.updatedAt) }}
                      </div>
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="3" class="with-border p-2" v-model="comment"></textarea>
                    </div>
                    <div class="flex justify-end">
                      <button class="button" @click="submitComment()" :disabled="!comment.length > 0">submit</button>
                    </div>
                  </div>
              </transition-group>

            </div>


        </div>

        <!-- overly for mobile -->
        <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
          user: {
              id: null
          },
          comments: [],
          announcements: []
      },
      loading: true,
      comment: '',
      lectures: [],
      selectedCourse: null,
      activeTab: 'overview'
    }
  },

  mounted () {
    this.fetchCourse();
  },

  computed: {
    // get active lecture 
    activeLecture() {
      return this.lectures.find(lecture => lecture._id === this.$route.params.lectureId)
    },
  },

  methods: {
    fetchCourse() {
      this.$http.get('courses/' + this.$route.params.id)
      .then(res => {
        this.course = res.data
        this.loading = false

        this.fetchLectures()
      })
      .catch(err => {
        console.error(err);
      })
    },

    fetchLectures() {
      this.$http.get('/lectures?course=' + this.$route.params.id)
      .then(res => {
        this.lectures = res.data.docs
      })
      .catch(err => {
        console.error(err);
      })
    },

    submitComment() {
      this.$http.post('/courses/' + this.$route.params.id + '/comments', {
          content: this.comment
      })
      .then(res => {
          // clear form
          this.comment = '';
          this.fetchCourse()
      })
      .catch(err => {
          console.error(err); 
      })
    },

    createUpdatedAtReadable(d) {
      const date = new Date(d);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      return  `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    },

    changeTab(tab) {
      this.activeTab = tab;
    }

    // getRouteQuery() {
    //   let query = '';

    //   Object.keys(this.filters).filter(key => this.filters[key]).map(key => query += `${key}=${this.filters[key]}&`);

    //   return query;
    // }
  },
}
</script>

<style>
.show-in-enter {
  opacity: 0;
  position: absolute;
}

.show-in-enter-active {
  transition: all .22s ease;
}

.show-in-leave-active {
  transition: all .22s;
  opacity: 0;
  position: absolute;
}
</style>
