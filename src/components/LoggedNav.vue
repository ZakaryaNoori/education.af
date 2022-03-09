<template>
<!--  Header  -->
        <header class="border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: border-b"> 
        <!-- <header class="is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: is-dark is-transparent border-b">  -->
            <div class="header_inner">
                <div class="left-side">
    
                    <!-- Logo -->
                    <div id="logo">
                        <router-link to="/" href="explore.html">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo.png" alt="">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo-light.png" class="logo_inverse" alt="">
                            <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo-mobile.png" class="logo_mobile" alt="">
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
                                        My courses
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