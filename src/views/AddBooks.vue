<template>
    <div class="main_content">
      <div class="container">
        <div class="lg:flex lg:space-x-10">
          <div class="lg:w-2/3 flex-shrink-0">
            <div class="text-2xl font-semibold mb-5">Add a new book</div>
            <form @submit.prevent="uploadBook()" class="space-y-3">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label for="name" class="text-sm mb-0">Book name</label>
                  <input type="text" class="with-border" v-model="book.name">
                  <p class="text-sm text-red-500 mt-1">{{ errors.name }}</p>
                </div>
                <div>
                  <label for="author" class="text-sm mb-0">Author</label>
                  <input type="text" class="with-border" v-model="book.author">
                  <p class="text-sm text-red-500 mt-1">{{ errors.author }}</p>
                </div>
              </div>
              <div>
                <label for="description" class="text-sm mb-0">Description</label>
                <textarea name="description" id="description" cols="30" rows="5" class="with-border p-4" v-model="book.description"></textarea>
                <p class="text-sm text-red-500 mt-1">{{ errors.description }}</p>
              </div>
              <div>
                <label for="publishDate" class="text-sm mb-0">Publish date</label>
                <input type="date" class="with-border p-3" v-model="book.publishDate">
                <p class="text-sm text-red-500 mt-1">{{ errors.publishDate }}</p>
              </div>
              <div>
                <label for="attachment" class="text-sm mb-0">Attachment</label>
                <input type="file" class="with-border" @change="uploadFile()" ref="file">
                <p class="text-sm text-red-500 mt-1">{{ errors.attachment }}</p>
              </div>
              <div>
                <button class="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      book: {
        name: '',
        author: '',
        description: '',
        publishDate: '',
        attachment: null
      }
    }
  },
  methods: {
    uploadBook() {
      this.$http.post('/books', this.book)
      .then(res => {
        console.log(res)
        this.$router.push('/books')
        UIkit.notification({ message: 'Book added successfully' , pos: 'top-right', status: 'success'  })
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
        this.book.attachment = res.data._id;
      })
      .catch(err => {
        console.error(err)
      })
    }
  },
}
</script>
