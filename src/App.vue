<template>
    <div
        id="app"
        :class="showNav ? 'flex flex-col min-h-screen' : 'is-verticle'"
    >
        <div v-if="this.$route.name !== 'lectures'">
            <Navbar v-if="showNav" />
            <LoggedNav v-else />
        </div>
        <transition name="fade-in" mode="out-in">
          <router-view class="flex-grow flex flex-col justify-center" />
        </transition>
        <div v-if="this.$route.name !== 'lectures'">
            <SideBar v-if="!showNav" />
        </div>
        <div class="lg:mb-5 py-3 uk-link-reset" v-if="showNav">
            <div
                class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3"
            >
                <p class="capitalize">© copyright 2021 by Education.af</p>
                <div class="flex space-x-4 text-gray-700">
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
import Navbar from './components/Navbar.vue';
import LoggedNav from './components/LoggedNav.vue';
import SideBar from './components/SideBar.vue';
export default {
    components: {
        Navbar,
        LoggedNav,
        SideBar,
    },
    created() {
        this.$store.dispatch('user/setToken', localStorage.getItem('token'));
        this.$store.dispatch('user/setUser', JSON.parse(localStorage.getItem('user')));
    },
    computed: {
        showNav() {
            return (
                this.$route.name == 'login' || this.$route.name == 'register'
            );
        },
    },
};
</script>

<style>
.fade-in-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-in-enter-active {
  transition: all .22s ease;;
}

.fade-in-leave-active {
  transition: all .22s;
  opacity: 0;
  transform: translateY(10px);
}
</style>