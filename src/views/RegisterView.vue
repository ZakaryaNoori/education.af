<template>
  <div>
          <div class="lg:p-12 max-w-2xl lg:my-0 my-12 mx-auto p-6 space-y-" style="width: 600px">
              <form class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                  <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Register </h1>

                  <div class="">
                      <div>
                          <label class="mb-0" for="first-name"> Name </label>
                          <input type="text" placeholder="Your Name" v-model="user.name"  id="first-name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                          <p class="text-red-500 text-sm mt-1">
                                {{ errors.name }}
                          </p>
                      </div>
                      <!-- <div>
                          <label class="mb-0" for="last-name"> Last  Name </label>
                          <input type="text" placeholder="Last  Name"  id="last-name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                      </div> -->
                  </div>
                  <!-- <div>
                      <label class="mb-0" for="username"> Username </label>
                      <input type="text" placeholder="Username" id="username" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                  </div> -->
                  <div>
                      <label class="mb-0" for="email"> Email Address </label>
                      <input type="email" placeholder="Info@example.com" v-model="user.email" id="email" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                      <p class="text-red-500 text-sm mt-1">
                                {{ errors.email }}
                          </p>
                  </div>
                  <div>
                      <label class="mb-0" for="password"> Password </label>
                      <input type="password" placeholder="******" v-model="user.password" id="password" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                      <p class="text-red-500 text-sm mt-1">
                                {{ errors.password }}
                          </p>
                  </div>
                  <div class="">
                      <!-- <div>
                          <label class="mb-0"> Gender </label>
                          <select class="selectpicker mt-2">
                              <option>Male</option>
                              <option>Female</option>
                          </select>

                      </div> -->
                      <div>
                          <label class="mb-0"> Phone  </label>
                          <input type="text" placeholder="+93 792 00 00 00" v-model="user.phone" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                            <p class="text-red-500 text-sm mt-1">
                                {{ errors.phone }}
                            </p>
                      </div>
                  </div>

                  <!-- <div class="checkbox">
                      <input type="checkbox" id="chekcbox1" checked="">
                      <label for="chekcbox1"><span class="checkbox-icon"></span> I agree to the <a href="pages-terms.html" target="_blank" class="uk-text-bold uk-text-small uk-link-reset"> Terms and Conditions </a>
                      </label>
                  </div> -->

                  <div>
                      <button type="button" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full" @click="register()">
                          Get Started</button>
                  </div>

                  <div>
                        Already have an account? <router-link to="login" class="text-blue-500 uk-text-bold">Login</router-link>
                  </div>
              </form>


          </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                phone: '',
                role: ''
            },
            errors: []
        }
    },
    methods: {
        register() {
            this.$http.post('/register',this.user)
            .then(res => {
                UIkit.notification({ message: 'User created <strong>successfully</strong> <br /> redirecting to login' , pos: 'top-right', status: 'success'  });
                setTimeout(() => {
                    this.$router.push('/login');
                }, 3000);
            })
            .catch(err => {
                this.errors = err.response.data
            })
        }
    },
}
</script>

 <style>
    input , .bootstrap-select.btn-group button{
        background-color: #f3f4f6  !important;
        height: 44px  !important;
        box-shadow: none  !important; 
    }
  </style>