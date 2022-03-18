<template>
   <div class="main_content">
            <div class="container md:space-y-10 space-y-5">
                
                <div>

                    <!-- title -->
                    <div class="mb-2">
                        <div class="text-xl font-semibold">  The world's largest selection of courses  </div>
                        <div class="text-sm mt-2">  Choose from hundreds of online video courses with new additions published every month </div>
                    </div>

                    <!--  slider -->
                    <div class="mt-3">    
                        <div class="relative">
                
                            <div class="px-1 py-3">
                                
                                <ul class="grid grid-cols-3 gap-6" v-if="!loading">
                                    
                                    <li v-for="course in courses" :key="course.id">
                                      <router-link :to="'/courses/' + course.id" class="uk-link-reset block h-full" tag="a">
                                        <div class="card uk-transition-toggle h-full flex flex-col relative">
                                            <div
                                                class="absolute h-10 w-10 top-2 right-2 z-20 bg-gray-100 rounded-full flex items-center justify-center"
                                                @click.prevent="likeCourse(course)">
                                                <ion-icon name="heart" class="text-xl text-red-500" v-if="course.isLiked"></ion-icon>
                                                <ion-icon name="heart" class="text-xl" v-else></ion-icon>
                                            </div>
                                                <div class="card-media h-40">
                                                    <div class="card-media-overly"></div>
                                                    <img :src="'http://localhost:3000/api/attachments/' + course.image" alt="" class="">
                                                    <span class="icon-play"></span>
                                                </div>
                                                <div class="card-body p-4 flex-grow flex flex-col">
                                                    <div class="font-semibold line-clamp-2"> {{ course.title }} </div>
                                                    <div class="flex space-x-2 items-center text-sm pt-3">
                                                        <div> {{ course.lecturesCount  }} lectures </div>
                                                    </div>
                                                    <div class="pt-1 flex justify-between flex-grow items-end">
                                                        <div class="text-sm font-medium"> {{ course.user.name }} </div>
                                                        <div class="text-xs font-semibold bg-indigo-100 text-indigo-900 px-2 py-1 rounded-full" v-if="course.isEnrolled">  enrolled </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </router-link>

                                    </li>
                                    
    
                                </ul>
                                <h1 v-else>
                                    Loading...
                                </h1>
                            </div>
                        </div>
                    
                    </div>
    
                </div>

                <!--  Categories -->
                <!-- <div>

                    <div class="sm:my-8 my-3 flex items-end justify-between">
                        <div>
                            <h2 class="text-xl font-semibold"> Categories </h2>
                            <p class="font-medium text-gray-500 leading-6"> Find a topic by browsing top categories. </p>
                        </div>
                        <a href="#" class="text-blue-500 sm:block hidden"> See all </a>
                    </div> 
    
                    <div class="relative -mt-3" uk-slider="finite: true">
                    
                        <div class="uk-slider-container px-1 py-3">
                            <ul class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/design.jpg" class="absolute w-full h-full object-cover" alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/marketing.jpg" class="absolute w-full h-full object-cover"
                                            alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Marketing </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/it-and-software.jpg" class="absolute w-full h-full object-cover"
                                            alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Software</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/music.jpg" class="absolute w-full h-full object-cover" alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Music </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/business.jpg" class="absolute w-full h-full object-cover" alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Travel </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded-md overflow-hidden relative w-full h-36">
                                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                        </div>
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/development.jpg" class="absolute w-full h-full object-cover" alt="">
                                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Development </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <a class="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i class="icon-feather-chevron-left"></i></a>
                        <a class="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i class="icon-feather-chevron-right"></i></a>
    
                    </div>

                </div> -->

            </div>

            <!-- footer -->
            <div class="lg:mt-28 mt-10 mb-7 px-12 border-t pt-7">
                <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
                    <p class="capitalize font-medium"> © copyright 2021 Education.af</p>
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
      courses: null,
      loading: true
    }
  },
  mounted () {
    this.fetchCourses();
  },

  methods: {
    fetchCourses() {
        let url = 'courses';

      if (this.$route.query.category) {
        url = `courses?category=${this.$route.query.category}`;
      }

      this.$http.get(url)
          .then(response => {
            this.loading = false;
            this.courses = response.data.docs
          })
    },

    likeCourse(course) {
        this.$http.post(`courses/${course._id}/likes`)
            .then(response => {
                this.fetchCourses();
            })
            .catch(error => {
                console.log(error);
            })
    }
  },
}
</script>

<style>

</style>