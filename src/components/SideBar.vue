<template>
  <!-- sidebar -->
        <div class="sidebar">
            <div class="sidebar_inner" data-simplebar>
                <ul class="side-colored">
                    <router-link to="/dashboard" tag="li" active-class="active" v-if="isAdmin">
                        <a class="side-colored__item">
                            <svg width="512" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="36" y="411" class="opacity-80" width="440" height="45" rx="22.5" fill="white"/>
                                <rect x="36" y="383" class="opacity-80" width="165" height="50" rx="25" transform="rotate(-90 36 383)" fill="white"/>
                                <rect x="192" y="383" class="opacity-80" width="259" height="50" rx="25" transform="rotate(-90 192 383)" fill="white"/>
                                <rect x="270" y="383" class="opacity-80" width="71" height="50" rx="25" transform="rotate(-90 270 383)" fill="white"/>
                                <rect x="348" y="383" class="opacity-80" width="327" height="50" rx="25" transform="rotate(-90 348 383)" fill="white"/>
                                <rect x="426" y="383" class="opacity-80" width="243" height="50" rx="25" transform="rotate(-90 426 383)" fill="white"/>
                                <rect x="114" y="383" class="opacity-80" width="105" height="50" rx="25" transform="rotate(-90 114 383)" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </router-link>
                    <router-link to="/create-course" tag="li" active-class="active" v-if="isLoggedIn && (isTeacher || isAdmin)">
                        <a href="javascript:void(0)">
                            <ion-icon name="compass" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                            </ion-icon>
                            <span> Create Course</span>
                        </a>
                    </router-link>
                    <router-link to="/courses" tag="li" active-class="active">
                        <a href="javascript:void(0)">
                            <ion-icon name="play-circle" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span> Courses</span>
                        </a>
                    </router-link>
                    <router-link to="/categories" tag="li" active-class="active">
                        <a href="javascript:void(0)">
                            <ion-icon name="albums"  class="bg-gradient-to-br from-green-300 p-1 rounded-md side-icon text-opacity-80 text-white to-green-500">
                            </ion-icon>
                            <span> Categories </span>
                        </a>
                    </router-link>
                    <!-- <router-link to="/episodes" tag="li" active-class="active">
                        <a href="javascript:void(0)">
                            <ion-icon name="film" class="bg-gradient-to-br from-pink-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span> Episodes </span>
                        </a>
                    </router-link> -->
                    <router-link to="/books" tag="li" active-class="active">
                        <a href="books.html">
                            <ion-icon name="book" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span> Books </span>
                        </a>
                    </router-link>
                    <router-link to="/add-books" tag="li" active-class="active">
                        <a href="books.html">
                            <ion-icon name="book" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span> Add new book </span>
                        </a>
                    </router-link>
                    <router-link v-if="isLoggedIn && isTeacher" to="/my-courses" tag="li" active-class="active">
                        <a href="javascript:void(0)">
                            <ion-icon name="newspaper" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                            </ion-icon>
                            <span> My Courses</span>
                        </a>
                    </router-link>
                </ul>

                <ul class="side_links" data-sub-title="Pages">
                    <li><router-link to="/faq"> <ion-icon name="albums-outline" class="side-icon"></ion-icon> Faq </router-link></li>
                    <li><router-link to="/terms"> <ion-icon name="chatbubble-ellipses-outline" class="side-icon"></ion-icon> Terms <span class="soon">new</span> </router-link></li>
                    <!-- <li><a href="pages-account-info.html"> <ion-icon name="reader-outline" class="side-icon"></ion-icon> Billing </a></li> -->
                    <!-- <li><a href="pages-payment-info.html"> <ion-icon name="wallet-outline" class="side-icon"></ion-icon> Payments</a></li> -->
                    <li><router-link to="/privacy"> <ion-icon name="document-text-outline" class="side-icon"></ion-icon> Privacy </router-link></li> 
                    <li><router-link to="/settings"> <ion-icon name="settings-outline" class="side-icon"></ion-icon> Setting </router-link></li> 
                </ul>

                <div class="side_foot_links">
                    <a href="#">About</a>
                    <a href="#">Blog </a>
                    <a href="#">Careers</a>
                    <a href="#">Support</a>
                    <a href="#">Contact Us </a>
                    <a href="#">Developer</a>
                    <a href="#">Terms of service</a>
                </div>

            </div>

            <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>
        </div>
</template>

<script>
export default {
    computed: {
        isTeacher() {
             // check local storage for user type
            let user = localStorage.getItem('user')
            user = JSON.parse(user)

            return user.role == 'Instructor'
        },

        isAdmin() {
            // check local storage for user type
            let user = localStorage.getItem('user')
            user = JSON.parse(user)

            return user.role == 'Admin'
        },

        isLoggedIn() {
            return localStorage.getItem('token')
        }
    },
}
</script>

<style>

</style>