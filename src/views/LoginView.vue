<template>
    <div>
        <!-- header-->
        <!-- Content-->
        <div>
            <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                <form
                    class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md"
                >
                    <h1 class="lg:text-2xl text-xl font-semibold mb-6">
                        Login
                    </h1>

                    <p class="text-red-500 font-medium mb-3">
                        {{ errors.message }}
                    </p>

                    <div>
                        <label class="mb-0" for="email"> Email Address </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Info@example.com"
                            class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            v-model="user.email"
                        />
                        <p class="text-red-500 mb-3">
                            {{ errors.email }}
                        </p>
                    </div>
                    <div>
                        <label class="mb-0" for="password"> Password </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="******"
                            class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            v-model="user.password"
                        />
                        <p class="text-red-500 mb-3">
                            {{ errors.password }}
                        </p>
                    </div>

                    <div>
                        <button
                            type="button"
                            class="bg-blue-600 font-semibold p-2.5 mt-5 rounded-md text-center text-white w-full"
                            @click="login()"
                        >
                            Get Started
                        </button>
                    </div>
                    <div>
                        Don't have an account? <router-link to="/register" class="text-blue-500">Sign Up</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        login() {
            this.$http.post('/login',this.user)
            .then(res => {
                // add token to local storage
                localStorage.setItem('token', res.data.token);
                // add user to local storage
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('userId', JSON.stringify(res.data.user._id));

                this.$store.dispatch('user/setToken', res.data.token);
                this.$store.dispatch('user/setUser', res.data.user);

                // redirect to dashboard
                this.$router.push('/');
            })
            .catch(err => {
                this.errors = err.response.data
            })
        }
    },
};
</script>

<style>
   input , .bootstrap-select.btn-group button{
        background-color: #f3f4f6  !important;
        height: 44px  !important;
        box-shadow: none  !important; 
    }
</style>