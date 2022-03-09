<template>
  <div class="main_content">
    <div class="container md:space-y-10 space-y-5">
      <h1 class="text-xl font-semibold">Create new course</h1>
      <form action="" class="space-y-4" @submit.prevent="saveCourse()">
        <div>
          <label class="mb-1" for="title"> Title </label>
          <input type="text" id="title" placeholder="title" class="with-border" v-model="course.title">
          <p class="text-sm text-red-500 mt-1">{{ errors.title }}</p>
        </div>
        <div>
          <label class="mb-1" for="des"> Description </label>
          <textarea name="des" id="des" cols="30" rows="5" class="with-border p-4" v-model="course.description" placeholder="course description"></textarea>
          <p class="text-sm text-red-500 mt-1">{{ errors.description }}</p>
        </div>
        <div>
          <label class="mb-1" for="title"> Course Category </label>
          <!-- <input type="text" id="title" placeholder="category" class="with-border" v-model="course.category"> -->
          <select class="with-border px-2" @change="addCategory($event.target.value)">
            <option :value="cat.name" v-for="cat in categories" :key="cat.id">
              {{ cat.name }}
            </option>
          </select>
          <div class="mt-3 space-x-2 flex flex-wrap">
            <span v-for="c in course.categories" :key="c.id" class="bg-white block border border-gray-200 px-3 py-2 text-gray-800 rounded-lg text-sm cursor-pointer hover:bg-gray-100" @click="removeCategory(c)">
              {{ c }}
            </span>
          </div>
          <p class="text-sm text-red-500 mt-1">{{ errors.categories }}</p>
        </div>
        <div>
          <input type="file" @change="uploadFile($event.target)" ref="file">
          <p class="text-sm text-red-500 mt-1">{{ errors.image }}</p>
        </div>
        <div>
          <button class="button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
        title: '',
        description: '',
        image: null,
        categories: []
      },
      errors: [],
      categories: []
    }
  },
  mounted () {
    this.fetchCategories();
  },

  methods: {
    saveCourse() {
      this.$http.post('/courses', this.course)
      .then(res => {
        this.$router.push('/my-courses')
      })
      .catch(err => {
        this.errors = err.response.data
      })
    },

    fetchCategories() {
      this.$http.get('/categories')
      .then(res => {
        this.categories = res.data
      })
      .catch(err => {
        console.error(err); 
      })
    },

    addCategory(category) {
      this.course.categories.push(category)
    },

    removeCategory(c) {
      this.course.categories = this.course.categories.filter(cat => cat !== c)
    },

    uploadFile(target) {
      const formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);
      
      this.$http.post('/attachments',formData)
      .then(res => {
        this.course.image = res.data._id
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
}
</script>

<style>

</style>