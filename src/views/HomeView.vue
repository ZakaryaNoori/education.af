<template>
  <div class="home">
    <div id="wrapper" class="is-verticle">

        

        <!-- Main Contents -->
        <div class="main_content">

            <!-- Slideshow -->
            <div class="uk-position-relative uk-visible-toggle overflow-hidden lg:-mt-20" tabindex="-1"
              uk-slideshow="animation: scale ;min-height: 200; max-height: 450 ;autoplay: t rue">

              <ul class="uk-slideshow-items rounded">
                  <li>
                      <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                          <img src="@/assets/hero-1.jpg" class="object-cover" alt="" uk-cover>
                      </div>
                      <div class="container relative md:p-20 md:mt-7 p-5 h-full"> 
                        <div uk-slideshow-parallax="scale: 1,1,0.8" class="flex flex-col justify-center h-full w-full space-y-3">
                            <h1 uk-slideshow-parallax="y: 100,0,0" class="lg:text-4xl text-2xl text-white font-semibold"> Learn from the best</h1>
                            <p uk-slideshow-parallax="y: 150,0,0" class="text-base text-white font-medium pb-4 lg:w-1/2"> Choose from 130,000 online video courses with new additions published every month </p>
                            <router-link uk-slideshow-parallax="y: 200,0,50" to="login" class="bg-opacity-90 bg-white py-2.5 rounded-md text-base text-center w-32"> Get Started </router-link> 
                        </div>
                      </div>
                  </li> 
                  <li>
                    <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                        <img src="@/assets/hero-2.jpg" class="object-cover" alt="" uk-cover>
                    </div>
                    <div class="container relative md:p-20 md:mt-7 p-5 h-full"> 
                        <div uk-slideshow-parallax="scale: 1,1,0.8" class="flex flex-col justify-center h-full w-full space-y-3">
                            <h1 uk-slideshow-parallax="y: 100,0,0" class="lg:text-4xl text-2xl text-white font-semibold"> Learn from the best</h1>
                            <p uk-slideshow-parallax="y: 150,0,0" class="text-base text-white font-medium pb-4 lg:w-1/2"> Choose from 130,000 online video courses with new additions published every month </p>
                            <router-link uk-slideshow-parallax="y: 200,0,0" href="#" to="login" class="bg-opacity-90 bg-white py-2.5 rounded-md text-base text-center w-32"> Get Started </router-link> 
                        </div>
                      </div>
                </li> 
              </ul>

              <ul class="uk-slideshow-nav uk-dotnav absolute bottom-0 left-0 m-7 lg:flex hidden"></ul>
            </div> 
            
            <div class="container">

                <!--  slider courses --> 
                <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
                      <h2 class="text-2xl font-semibold"> Popular Courses  </h2>
                  <router-link to="/courses" class="text-blue-500 sm:block hidden"> See all </router-link>
                </div> 

                <div class="mt-3">

                    <h4 class="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden> <ion-icon name="star"></ion-icon> Featured today </h4>

                    <!--  slider -->
                    <div class="mt-3">

                        <h4 class="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden> <ion-icon name="star"></ion-icon> Featured today </h4>

                        <div class="relative" uk-slider="finite: true">

                            <div class="uk-slider-container px-1 py-3">

                                <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">

                                    <li v-for="course in courses" :key="course.id">

                                        <a href="course-intro.html" class="uk-link-reset">
                                            <div class="card uk-transition-toggle">
                                                <div class="card-media h-40">
                                                    <div class="card-media-overly"></div>
                                                    <img :src="`http://localhost:3000/api/attachments/${course.image}`" alt="" class="">
                                                    <span class="icon-play"></span>
                                                </div>
                                                <div class="card-body p-4">
                                                    <div class="font-semibold line-clamp-2"> {{ course.title }} </div>
                                                    <div class="flex space-x-2 items-center text-sm pt-3">
                                                        <div> {{ course.lecturesCount }} lectures </div>
                                                    </div>
                                                    <div class="pt-1 flex items-center justify-between">
                                                        <div class="text-sm font-medium"> {{ course.user.name }} </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </li>


                                </ul>

                                <a class="absolute bg-white top-1/4 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <ion-icon name="chevron-back-outline"></ion-icon></a>
                                <a class="absolute bg-white top-1/4 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <ion-icon name="chevron-forward-outline"></ion-icon></a>

                            </div>
                        </div>

                    </div>
                
                </div>
                
                <!--  books  --> 
                <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
                      <h2 class="text-2xl font-semibold"> Latest Books </h2>
                  <router-link to="/books" class="text-blue-500 sm:block hidden"> See all </router-link>
                </div> 

                <div class="relative" uk-slider="finite: true">
                    <div class="uk-slider-container px-1 py-3">
                        <ul
                            class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                            <li v-for="book in books" :key="book.id">
                                <div class="card">
                                    <router-link :to="`/books/${book._id}`">
                                        <img :src="`http://localhost:3000/api/attachments/${book.previewImage}`" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate">{{ book.name }}</div>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="previous"> <ion-icon name="chevron-back-outline"></ion-icon></a>
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="next"> <ion-icon name="chevron-forward-outline"></ion-icon></a>
                
                    </div>
                </div>

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
        
        
        
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
      return {
        courses: [],
        books: [],
      }
  },
  mounted () {
    this.getPopularClasses();
    this.getBooks();
  },

  methods: {
      getPopularClasses() {
        this.$http.get('/courses')
        .then(response => {
            this.courses = response.data.docs;
        })
        .catch(error => {
          console.log(error);
        })
      },

      getBooks() {
        this.$http.get('/books')
        .then(response => {
            this.books = response.data.docs;
        })
        .catch(error => {
          console.log(error);
        })
      },
  },
}
</script>
