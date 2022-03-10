<template>
<!--  Header  -->
        <header class="border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: border-b"> 
        <!-- <header class="is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: is-dark is-transparent border-b">  -->
            <div class="header_inner">
                <div class="left-side">
    
                    <!-- Logo -->
                    <div id="logo">
                        <router-link to="/">
                            <!-- <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo.png" alt="">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo-light.png" class="logo_inverse" alt="">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo-mobile.png" class="logo_mobile" alt=""> -->
                            <svg width="150" height="22" viewBox="0 0 150 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.684 17.304H12.944V21H0.82V1.4H12.804V5.096H4.684V9.268H12.104V12.908H4.684V17.304ZM24.7117 1.4H28.3237V21H24.7117V19.348C23.6477 20.7107 22.1357 21.392 20.1757 21.392C18.2903 21.392 16.6757 20.6827 15.3317 19.264C14.0063 17.8267 13.3437 16.072 13.3437 14C13.3437 11.928 14.0063 10.1827 15.3317 8.764C16.6757 7.32667 18.2903 6.608 20.1757 6.608C22.1357 6.608 23.6477 7.28933 24.7117 8.652V1.4ZM18.0477 16.856C18.7943 17.584 19.7277 17.948 20.8477 17.948C21.9677 17.948 22.8917 17.584 23.6197 16.856C24.3477 16.1093 24.7117 15.1573 24.7117 14C24.7117 12.8427 24.3477 11.9 23.6197 11.172C22.8917 10.4253 21.9677 10.052 20.8477 10.052C19.7277 10.052 18.7943 10.4253 18.0477 11.172C17.3197 11.9 16.9557 12.8427 16.9557 14C16.9557 15.1573 17.3197 16.1093 18.0477 16.856ZM39.467 7H43.079V21H39.467V19.432C38.5897 20.7387 37.199 21.392 35.295 21.392C33.7643 21.392 32.495 20.8787 31.487 19.852C30.4977 18.8253 30.003 17.4067 30.003 15.596V7H33.615V15.148C33.615 16.0813 33.867 16.8 34.371 17.304C34.875 17.7893 35.547 18.032 36.387 18.032C37.3203 18.032 38.067 17.7427 38.627 17.164C39.187 16.5853 39.467 15.7173 39.467 14.56V7ZM51.6512 21.392C49.5418 21.392 47.7778 20.6827 46.3592 19.264C44.9592 17.8453 44.2592 16.0907 44.2592 14C44.2592 11.9093 44.9592 10.1547 46.3592 8.736C47.7778 7.31733 49.5418 6.608 51.6512 6.608C53.0138 6.608 54.2552 6.93467 55.3752 7.588C56.4952 8.24133 57.3445 9.11867 57.9232 10.22L54.8152 12.04C54.5352 11.4613 54.1058 11.004 53.5272 10.668C52.9672 10.332 52.3325 10.164 51.6232 10.164C50.5405 10.164 49.6445 10.528 48.9352 11.256C48.2258 11.9653 47.8712 12.88 47.8712 14C47.8712 15.1013 48.2258 16.016 48.9352 16.744C49.6445 17.4533 50.5405 17.808 51.6232 17.808C52.3512 17.808 52.9952 17.6493 53.5552 17.332C54.1338 16.996 54.5632 16.5387 54.8432 15.96L57.9792 17.752C57.3632 18.8533 56.4952 19.74 55.3752 20.412C54.2552 21.0653 53.0138 21.392 51.6512 21.392ZM69.2389 7H72.8509V21H69.2389V19.348C68.1562 20.7107 66.6349 21.392 64.6749 21.392C62.8082 21.392 61.2029 20.6827 59.8589 19.264C58.5335 17.8267 57.8709 16.072 57.8709 14C57.8709 11.928 58.5335 10.1827 59.8589 8.764C61.2029 7.32667 62.8082 6.608 64.6749 6.608C66.6349 6.608 68.1562 7.28933 69.2389 8.652V7ZM62.5749 16.856C63.3029 17.584 64.2269 17.948 65.3469 17.948C66.4669 17.948 67.3909 17.584 68.1189 16.856C68.8655 16.1093 69.2389 15.1573 69.2389 14C69.2389 12.8427 68.8655 11.9 68.1189 11.172C67.3909 10.4253 66.4669 10.052 65.3469 10.052C64.2269 10.052 63.3029 10.4253 62.5749 11.172C61.8469 11.9 61.4829 12.8427 61.4829 14C61.4829 15.1573 61.8469 16.1093 62.5749 16.856ZM82.7342 10.472H79.5702V16.296C79.5702 16.7813 79.6916 17.136 79.9342 17.36C80.1769 17.584 80.5316 17.7147 80.9982 17.752C81.4649 17.7707 82.0436 17.7613 82.7342 17.724V21C80.2516 21.28 78.4969 21.0467 77.4702 20.3C76.4622 19.5533 75.9582 18.2187 75.9582 16.296V10.472H73.5222V7H75.9582V4.172L79.5702 3.08V7H82.7342V10.472ZM85.8917 5.32C85.2943 5.32 84.7717 5.10533 84.3237 4.676C83.8943 4.228 83.6797 3.70533 83.6797 3.108C83.6797 2.51067 83.8943 1.988 84.3237 1.54C84.7717 1.092 85.2943 0.867999 85.8917 0.867999C86.5077 0.867999 87.0303 1.092 87.4597 1.54C87.9077 1.988 88.1317 2.51067 88.1317 3.108C88.1317 3.70533 87.9077 4.228 87.4597 4.676C87.0303 5.10533 86.5077 5.32 85.8917 5.32ZM84.0997 21V7H87.7117V21H84.0997ZM101.546 19.264C100.108 20.6827 98.3536 21.392 96.2816 21.392C94.2096 21.392 92.455 20.6827 91.0176 19.264C89.599 17.8267 88.8896 16.072 88.8896 14C88.8896 11.928 89.599 10.1827 91.0176 8.764C92.455 7.32667 94.2096 6.608 96.2816 6.608C98.3536 6.608 100.108 7.32667 101.546 8.764C102.983 10.1827 103.702 11.928 103.702 14C103.702 16.072 102.983 17.8267 101.546 19.264ZM93.5656 16.772C94.2936 17.5 95.199 17.864 96.2816 17.864C97.3643 17.864 98.2696 17.5 98.9976 16.772C99.7256 16.044 100.09 15.12 100.09 14C100.09 12.88 99.7256 11.956 98.9976 11.228C98.2696 10.5 97.3643 10.136 96.2816 10.136C95.199 10.136 94.2936 10.5 93.5656 11.228C92.8563 11.956 92.5016 12.88 92.5016 14C92.5016 15.12 92.8563 16.044 93.5656 16.772ZM112.627 6.608C114.157 6.608 115.417 7.12133 116.407 8.148C117.415 9.17467 117.919 10.5933 117.919 12.404V21H114.307V12.852C114.307 11.9187 114.055 11.2093 113.551 10.724C113.047 10.22 112.375 9.968 111.535 9.968C110.601 9.968 109.855 10.2573 109.295 10.836C108.735 11.4147 108.455 12.2827 108.455 13.44V21H104.843V7H108.455V8.568C109.332 7.26133 110.723 6.608 112.627 6.608ZM123.383 20.664C122.916 21.1307 122.356 21.364 121.703 21.364C121.049 21.364 120.489 21.1307 120.023 20.664C119.556 20.1973 119.323 19.6373 119.323 18.984C119.323 18.3307 119.556 17.7707 120.023 17.304C120.489 16.8373 121.049 16.604 121.703 16.604C122.356 16.604 122.916 16.8373 123.383 17.304C123.849 17.7707 124.083 18.3307 124.083 18.984C124.083 19.6373 123.849 20.1973 123.383 20.664ZM136.335 7H139.947V21H136.335V19.348C135.252 20.7107 133.731 21.392 131.771 21.392C129.904 21.392 128.299 20.6827 126.955 19.264C125.63 17.8267 124.967 16.072 124.967 14C124.967 11.928 125.63 10.1827 126.955 8.764C128.299 7.32667 129.904 6.608 131.771 6.608C133.731 6.608 135.252 7.28933 136.335 8.652V7ZM129.671 16.856C130.399 17.584 131.323 17.948 132.443 17.948C133.563 17.948 134.487 17.584 135.215 16.856C135.962 16.1093 136.335 15.1573 136.335 14C136.335 12.8427 135.962 11.9 135.215 11.172C134.487 10.4253 133.563 10.052 132.443 10.052C131.323 10.052 130.399 10.4253 129.671 11.172C128.943 11.9 128.579 12.8427 128.579 14C128.579 15.1573 128.943 16.1093 129.671 16.856ZM149.354 4.48C147.376 4.33067 146.386 5.124 146.386 6.86V7H149.354V10.472H146.386V21H142.774V10.472H140.758V7H142.774V6.86C142.774 4.88133 143.325 3.37867 144.426 2.352C145.528 1.32533 147.17 0.877333 149.354 1.008V4.48Z" fill="url(#paint0_linear_222_235)"/>
                                <defs>
                                <linearGradient id="paint0_linear_222_235" x1="0.986841" y1="13.5" x2="150" y2="13.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EE4448"/>
                                <stop offset="1" stop-color="#ED4670"/>
                                </linearGradient>
                                </defs>
                            </svg>


                        </router-link>
                    </div>
    
                    <!-- icon menu for mobile -->
                    <div class="triger" uk-toggle="target: #wrapper ; cls: is-active">
                    </div>
    
                </div>
                <div class="right-side">
     
                    <!-- Header search box  -->
                    <div class="header_search"><i class="uil-search-alt"></i> 
                        <input value="" type="text" class="form-control" placeholder=" Quick search for anything.." autocomplete="off">
                        <div uk-drop="mode: click;offset:10" class="header_search_dropdown">
                               
                            <h4 class="search_title"> Recently </h4>
                            <ul>
                                <li> 
                                    <a href="#">  
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-1.jpg" alt="" class="list-avatar">
                                        <div class="list-name">  Erica Jones </div>
                                    </a> 
                                </li> 
                                <li> 
                                    <a href="#">  
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-2.jpg" alt="" class="list-avatar">
                                        <div class="list-name">  Coffee  Addicts </div>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="#">  
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-3.jpg" alt="" class="list-avatar">
                                        <div class="list-name"> Mountain Riders </div>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="#">  
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-4.jpg" alt="" class="list-avatar">
                                        <div class="list-name"> Property Rent And Sale  </div>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="#">  
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-5.jpg" alt="" class="list-avatar">
                                        <div class="list-name">  Erica Jones </div>
                                    </a> 
                                </li>
                            </ul>
    
                        </div>
                    </div>

                    <div v-if="isLoggedIn">

                        <!-- cart -->
                        <a href="#" class="header_widgets">
                            <ion-icon name="cart-outline" class="is-icon"></ion-icon>
                        </a>
                        <div uk-drop="mode: click" class="dropdown_cart">
                            <div class="cart-headline"> Recent Courses 
                            <a href="#" class="checkout">View all</a>
                        </div>
                            <ul class="dropdown_cart_scrollbar" data-simplebar>
                                <li>
                                    <div class="cart_avatar">
                                        <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/courses/img-1.jpg" alt="">
                                    </div>
                                    <div class="cart_text">
                                        <h4> Learn Angular Beginner to Advanced Fundamentals </h4>
                                    </div>
                                    <div class="cart_price">
                                        <span> $12.99 </span>
                                        <button class="type"> Remove</button>
                                    </div>
                                </li>
                            </ul>
        
                            <div class="cart_footer">
                                <p> Subtotal : $ 320 </p>
                                <h1> Total :  <strong> $ 320</strong> </h1>
                            </div>
                        </div>
        
                         <!-- profile -->
                        <a href="#">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/placeholder.png" class="header_widgets_avatar" alt="">
                        </a>
                        <div uk-drop="mode: click;offset:5" class="header_dropdown profile_dropdown">
                            <ul>   
                                <li>
                                    <a href="#" class="user">
                                        <div class="user_avatar">
                                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/avatars/avatar-2.jpg" alt="">
                                        </div>
                                        <div class="user_name">
                                            <div> {{ user && user.name }} </div>
                                            <span> {{ user && user.email }} </span>
                                        </div>
                                    </a>
                                </li>
                                <!-- <li> 
                                    <hr>
                                </li> -->
                                <!-- <li> 
                                    <a href="#" class="is-link">
                                        <ion-icon name="rocket-outline" class="is-icon"></ion-icon> <span>  Upgrade Membership  </span>
                                    </a>
                                </li>  -->
                                <li> 
                                    <hr>
                                </li>
                                <li> 
                                    <a href="#">
                                        <ion-icon name="person-circle-outline" class="is-icon"></ion-icon>
                                         My Account 
                                    </a>
                                </li>
                                <li> 
                                    <router-link to="/courses">
                                        <ion-icon name="card-outline" class="is-icon"></ion-icon>
                                        My enrollments
                                    </router-link>
                                </li>
                                <!-- <li> 
                                    <a href="#">
                                        <ion-icon name="color-wand-outline" class="is-icon"></ion-icon>
                                        My Billing 
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <ion-icon name="settings-outline" class="is-icon"></ion-icon>
                                        Account Settings  
                                    </a>
                                </li> -->
                                <li> 
                                    <hr>
                                </li>
                                <!-- <li> 
                                    <a href="#" id="night-mode" class="btn-night-mode" onclick="UIkit.notification({ message: 'Hmm...  <strong> Night mode </strong> feature is not available yet. ' , pos: 'bottom-right'  })">
                                        <ion-icon name="moon-outline" class="is-icon"></ion-icon>
                                         Night mode
                                        <span class="btn-night-mode-switch">
                                            <span class="uk-switch-button"></span>
                                        </span>
                                    </a>
                                </li> -->
                                <li> 
                                    <a href="javascript:void(0)" @click="logout()">
                                        <ion-icon name="log-out-outline" class="is-icon"></ion-icon>
                                        Log Out 
                                    </a>
                                </li>
                            </ul>
                        </div> 

                    </div>
                    <div v-else class="flex gap-2">
                        <router-link to="login" class="button gray">Login</router-link>
                        <router-link to="register" class="button hover:text-white">Register</router-link>
                    </div>
    
                </div>
            </div>
        </header>
</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        logout() {
            // remove token from local storage
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            // redirect to login page
            this.$router.push('/login')
        },
    },

    computed: {
        isLoggedIn() {
            return localStorage.getItem('token')
        }
    },

    mounted () {
        // get user data from local storage
        const user = JSON.parse(localStorage.getItem('user'))
        this.user = user;
    },
}
</script>

<style>

</style>