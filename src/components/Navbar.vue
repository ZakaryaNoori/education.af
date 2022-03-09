<template>
  <div class="bg-white py-4 shadow dark:bg-gray-800">
          <div class="max-w-6xl mx-auto">


              <div class="flex items-center lg:justify-between justify-around">

                  <router-link to="/">
                      <img src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/logo.png" alt="" class="w-32">
                  </router-link>

                  <div class="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                      <router-link to="/login" class="py-3 px-4">Login</router-link>
                      <router-link to="register" class="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white hover:text-white">Register</router-link>
                  </div>

              </div>


          </div>
      </div>
</template>