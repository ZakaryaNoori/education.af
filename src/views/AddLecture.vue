<template>
  <div class="main_content">
    <div class="container">
      <div class="text-xl font-semibold mb-5">Add new lecture</div>
      <form action="" class="space-y-5" @submit.prevent="addLecture()">
        <div>
          <label for="title" class="mb-1 text-sm"> Title </label>
          <input type="text" id="title" placeholder="title" class="with-border" v-model="lecture.title">
          <p class="text-sm text-red-500 mt-1">{{ errors.title }}</p>
        </div>
        <div>
          <label for="title" class="mb-1 text-sm"> Description </label>
          <textarea id="description" placeholder="description" class="with-border p-3" v-model="lecture.description"></textarea>
          <p class="text-sm text-red-500 mt-1">{{ errors.description }}</p>
        </div>
        <div>
          <label for="attachment" class="mb-1 text-sm"> Attachments </label>
          <input type="file" ref="file" @change="uploadFile($event.target)">
          <p class="text-sm text-red-500 mt-1">{{ errors.attachments }}</p>
        </div>
        <div class="flex justify-end">
          <button class="button">Add lecture</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lecture: {
        title: '',
        description: '',
        attachments: [],
        course: this.$route.params.id
      },
      errors: [],
    }
  },
  methods: {
    addLecture() {
      this.$http.post('/lectures',this.lecture)
      .then(res => {
        UIkit.notification({ message: 'Lecture added successfully' , pos: 'top-right', status: 'success'  })
      })
      .catch(err => {
        this.errors = err.response.data
      })
    },

     uploadFile(target) {
      const formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);
      
      this.$http.post('/attachments',formData)
      .then(res => {
        this.lecture.attachments.push(res.data._id)
      })
      .catch(err => {
        console.error(err)
      })
    }
  },
}
</script>

<style>

</style>