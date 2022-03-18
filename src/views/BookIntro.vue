<template>
  <!-- Main Contents -->
        <div class="main_content">
            <div v-if="book" class="container p-0">
 
                <div class="lg:flex lg:space-x-10 bg-white rounded-md shadow max-w-3x  mx-auto md:p-8 p-3">
                    <div class="lg:w-1/3 w-full">

                        <div uk-sticky="offset: 91;bottom: true">
                            <div>
                                <a>
                                    <img alt="" :src="API_URL + '/attachments/' + book.previewImage" class="shadow-lg rounded-md w-32 md:w-full">
                                </a> 
                            </div>
                            <div>
                                <ul class="my-5 space-y-2">
                                    <li><strong>Author:</strong> {{ book.author }}</li>
                                    <!-- <li> Visited: 120 </li>                                          -->
                                    <li> <strong>Publish time:</strong> {{ book.publishDate.split('T')[0] }}</li>
                                    <!-- <li> Downloaded: 120 </li> -->
                                </ul>
                                <div>
                                    <a @click="download" class="button gray flex items-center gap-3"> <ion-icon name="download-outline" role="img" class="text-lg"></ion-icon> Download </a>
                                </div>
                            </div>
    
                        </div>
                         
                    </div>
                    <div class="lg:w-2/3 flex-shrink-0 mt-10 lg:m-0"> 
                        
                        <div> 

                            <h2 class="font-semibold mb-3 text-xl lg:text-2xl">{{ book.name }} </h2>
                            <hr class="mb-5">
                            <h4 class="font-semibold mb-2 text-base"> Description </h4>   
                            <div class="space-y-4">
                                {{ book.description }}
                            </div>
                              
                        </div>
                                       
                    </div>
                    
                </div> 

                <!--  books  -->
                <div class="sm:mt-10 mt-6 flex items-end justify-between px-2">
                    <h2 class="text-2xl font-semibold"> Related Books </h2>
                    <a href="#" class="text-blue-500 sm:block hidden"> See all </a>
                </div>
                <div class="relative px-3 md:p-0 mt-3" uk-slider="finite: true">
                    <div class="uk-slider-container px-1 py-3">
                        <ul
                            class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book4.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate">HTML Breaker</div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book5.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate"> CSS Master </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book1.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate"> Vue.js Basics </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book2.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate"> HTML5 & CSS3 </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book3.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate"> Learn CSS </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book4.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate">HTML Breaker</div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <a href="book-description.html">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book5.jpg" alt="" class="w-full h-52 object-cover">
                                        <div class="p-3 truncate"> CSS Master </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="previous"> <i class="icon-feather-chevron-left"></i></a>
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="next"> <i class="icon-feather-chevron-right"></i></a>
                
                    </div>
                </div>


            </div>

            <!-- footer -->
            <div class="lg:mt-28 mt-10 mb-7 px-12 border-t pt-7">
                <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
                    <p class="capitalize font-medium"> © copyright 2021  Courseplus</p>
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
      book: null,
      loading: true,
      API_URL: 'http://localhost:3000/api/'
    }
  },
  mounted () {
    this.fetchBook();
  },

  methods: {
    fetchBook() {
      this.$http.get(`books/${this.$route.params.id}`)
          .then(response => {
            this.loading = false;
            this.book = response.data
          })
    },

    download() {
        this.$http.get(`attachments/${this.book.attachment._id}`, { responseType: 'blob' })
            .then(response => {
                const blob = new Blob([response.data], { type: this.book.attachment.mime });
                const link = document.createElement('a');

                link.href = URL.createObjectURL(blob);
                link.download = this.book.attachment.originalName;
                link.click();
                URL.revokeObjectURL(link.href);
            })
    }
  },
}
</script>

<style>

</style>