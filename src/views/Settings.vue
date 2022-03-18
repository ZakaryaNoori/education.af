<template>
  <!-- Main Contents -->
        <div class="main_content">
            <div class="container">

                <h3 class="text-2xl font-medium mb-5"> General Setting </h3>

                <!-- Basic information -->
                <div class="grid lg:grid-cols-3 gap-8 md:mt-12">
                    <div>
                        <div uk-sticky="offset:100;bottom:true;media:992">
                            <h3 class="text-lg mb-2 font-semibold"> Basic</h3>
                            <p> Change your basic settings here</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-md lg:shadow-md shadow col-span-2">

                        <div class="grid grid-cols-2 gap-3 lg:p-6 p-4">
                            <div class="col-span-2">
                                <label for="first-name"> Full Name</label>
                                <input type="text" placeholder="" id="first-name" class="shadow-none with-border" v-model="user.name">
                            </div>
                            <div class="col-span-2">
                                <label for="email"> Email <span class="text-red-600">*</span></label>
                                <input type="text" placeholder="" id="email" class="shadow-none with-border" v-model="user.email">
                            </div>
                            <!-- Website logo  -->
                            <label for="system_info" class="font-medium">Photo  </label>
                            <div class="col-span-2 flex py-2 space-x-5">
                                <img :src="'http://localhost:3000/api/attachments/' + user.profilePic" alt="" class="h-12 rounded-full w-12" v-if="user.profilePic">
                                <img src="@/assets/placeholder.png" alt="" class="h-12 rounded-full w-12" v-else>
                                <label href="#" for="image" class="border font-medium px-3 py-1.5 rounded-md self-center shadow-sm text-center text-sm cursor-pointer">Change</label>
                                <!-- file input only for image -->
                                <input type="file" class="hidden" id="image" ref="file" @change="uploadFile()">
                            </div>

                            <div class="col-span-2">
                                <label for="Location"> Location</label>
                                <input type="text" placeholder="" id="location" class="shadow-none with-border" v-model="user.location">
                            </div>
                        </div> 
                        
                    </div>
                </div>
                <div class="mt-5 flex justify-end">
                    <button class="button" @click="updateProfile()">Save profile</button>
                </div>

                <!-- Change Password -->
                <div class="grid lg:grid-cols-3 gap-8 md:mt-12">
                    <div>
                        <div uk-sticky="offset:100;bottom:true;media:992">
                            <h3 class="text-lg mb-2 font-semibold"> Password</h3>
                            <p> Change your password here</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-md lg:shadow-md shadow col-span-2">
                        
                        <div class="lg:p-6 p-4 space-y-4">
                            <div>
                                <label for="current_password"> Current password</label>
                                <input type="text" placeholder="" v-model="passwords.oldPassword" id="current_password" class="shadow-none with-border">
                                <p class="text-red-500 text-sm mt-1">
                                    {{ passwordErrors.oldPassword }}
                                </p>
                            </div>
                            <div>
                                <label for="new_password"> New password</label>
                                <input type="text" placeholder="" id="new_password" v-model="passwords.newPassword" class="shadow-none with-border">
                                <p class="text-red-500 text-sm mt-1">
                                    {{ passwordErrors.newPassword }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 flex justify-end">
                    <button class="button" @click="changePassword()">Save Password</button>
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
            user: {},
            passwords: {},
            passwordErrors: {}
        }
    },
    mounted () {
        this.user = this.$store.state.user.user;
    },

    methods: {
        uploadFile(target) {
            const formData = new FormData();
            formData.append('file', this.$refs.file.files[0]);
            
            this.$http.post('/attachments',formData)
            .then(res => {
                this.user.profilePic = res.data._id
            })
            .catch(err => {
                console.error(err)
            })
        },

        updateProfile() {
            this.$http.put('/users/' + this.user._id, {
                name: this.user.name,
                email: this.user.email,
                location: this.user.location,
                profilePic: this.user.profilePic,
                role: this.user.role
            })
            .then(res => {
                console.log(res.data)
                this.$notify({
                    title: 'Success',
                    message: 'Profile updated successfully',
                    type: 'success'
                })
            })
            .catch(err => {
                console.error(err)
            })
        },

        changePassword() {
            this.$http.patch('/users/' + this.user._id + '/password', {
                oldPassword: this.passwords.oldPassword,
                newPassword: this.passwords.newPassword
            })
            .then(res => {
                console.log(res.data)
                this.$notify({
                    title: 'Success',
                    message: 'Password updated successfully',
                    type: 'success'
                })
            })
            .catch(err => {
                console.error(err)
                this.passwordErrors = err.response.data
            })
        }
    },
}
</script>

<style>

</style>