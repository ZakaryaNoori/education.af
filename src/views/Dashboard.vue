<template>
  <div class="main_content">
    <div class="container">
      <div class="text-2xl font-medium mb-10">Dashboard</div>
      <div class="text-lg mb-2">Users:</div>
      <div class="bg-white p-4 rounded-lg">
        <table class="table-auto w-full">
          <tr>
            <th class="p-2 border">Id</th>
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Phone</th>
            <th class="p-2 border">Email</th>
            <th class="p-2 border">Role</th>
            <th class="p-2 border">Actions</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td class="p-2 border">{{ index + 1 }}</td>
            <td class="p-2 border">{{ user.name }}</td>
            <td class="p-2 border">{{ user.phone }}</td>
            <td class="p-2 border">{{ user.email }}</td>
            <td class="p-2 border">{{ user.role }}</td>
            <td class="p-2 border text-center">
              <ion-icon name="trash-outline"></ion-icon>
            </td>
          </tr>
        </table>
      </div>
      <div class="h-12"></div>
      <div class="text-lg mb-2">Courses:</div>
      <div class="bg-white p-4 rounded-lg">
        <table class="table-auto w-full">
          <tr>
            <th class="p-2 border">Id</th>
            <th class="p-2 border">Title</th>
            <th class="p-2 border">Instructor</th>
            <th class="p-2 border">Categories</th>
            <th class="p-2 border">Lectures Count</th>
            <th class="p-2 border">Actions</th>
          </tr>
          <tr v-for="(course, index) in courses" :key="index">
            <td class="p-2 border">{{ index + 1 }}</td>
            <td class="p-2 border">{{ course.title }}</td>
            <td class="p-2 border">{{ course.user.name }}</td>
            <td class="p-2 border">{{ course.categories.join(", ") }}</td>
            <td class="p-2 border">{{ course.lecturesCount }}</td>
            <td class="p-2 border text-center">
              <ion-icon name="trash-outline"></ion-icon>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      courses: [],
    }
  },
  mounted () {
    this.getUsers();
    this.getCourses();
  },
  methods: {
    getUsers() {
      this.$http.get('/users')
      .then(res => {
        this.users = res.data.docs
      })
      .catch(err => {
        console.log(err)
      })
    },

    getCourses() {
      this.$http.get('/courses')
      .then(res => {
        this.courses = res.data.docs
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
}
</script>