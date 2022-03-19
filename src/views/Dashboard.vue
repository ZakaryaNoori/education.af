<template>
  <div class="main_content">
    <div class="container">
      <div class="text-2xl font-medium mb-10">Dashboard</div>
      <div class="grid grid-cols-3 mb-8 gap-4">
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl">{{ stats.instructors }}</span>
          <span>Instructors</span>
        </div>
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl">{{ stats.students }}</span>
          <span>Students</span>
        </div>
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl">{{ stats.courses }}</span>
          <span>Courses</span>
        </div>
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl">{{ stats.books }}</span>
          <span>Books</span>
        </div>
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl">{{ stats.lectures }}</span>
          <span>Lectures</span>
        </div>
        <div class="flex flex-col items-center justify-between bg-white rounded-lg py-4 h-32">
          <span></span>
          <span class="font-bold text-2xl"> {{ stats.categories }}</span>
          <span>Categories</span>
        </div>
      </div>
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
          <tr v-for="(user, index) in users.docs" :key="index">
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
      <div class="py-2">
        <pagination :paginationFields="users" @changePage="getData('users', $event)"/>
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
          <tr v-for="(course, index) in courses.docs" :key="index">
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
      <div class="py-2">
        <pagination :paginationFields="courses" @changePage="getData('courses', $event)"/>
      </div>
      <div class="h-12"></div>
      <div class="text-lg mb-2">Books:</div>
      <div class="bg-white p-4 rounded-lg">
        <table class="table-auto w-full">
          <tr>
            <th class="p-2 border">Id</th>
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Author</th>
            <th class="p-2 border">Publish Date</th>
            <th class="p-2 border">Actions</th>
          </tr>
          <tr v-for="(book, index) in books.docs" :key="index">
            <td class="p-2 border">{{ index + 1 }}</td>
            <td class="p-2 border">{{ book.name }}</td>
            <td class="p-2 border">{{ book.author }}</td>
            <td class="p-2 border">{{ book.publishDate }}</td>
            <td class="p-2 border text-center">
              <ion-icon name="trash-outline"></ion-icon>
            </td>
          </tr>
        </table>
      </div>
      <div class="py-2">
        <pagination :paginationFields="books" @changePage="getData('books', $event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
export default {
  components: { Pagination },
  data() {
    return {
      users: {},
      courses: {},
      books: {},
      stats: {}
    }
  },
  mounted () {
    this.getData('users');
    this.getData('courses');
    this.getData('books');
    this.getStats()
  },
  methods: {
    getData(collection, page = 1) {
      this.$http.get(`/${collection}?page=${page}`).then(response => {
        this[collection] = response.data;
      })
      .catch(err => {
        console.log(err)
      })
    },

    getStats() {
      this.$http.get('/dashboard/stats').then(response => {
        this.stats = response.data;
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}
</script>