<template>
  <!-- Main Contents -->
  <div class="main_content">
    <div class="container">
      <div class="lg:flex lg:space-x-10">
        <div class="lg:w-2/3 flex-shrink-0">
          <div class="text-2xl font-semibold">Books</div>

          <div v-if="books.docs" class="relative mt-2" uk-slider="finite: true">
            <div class="px-1 py-3">
              <ul
                class="
                  uk-child-width-1-4@m
                  uk-child-width-1-3@s
                  uk-child-width-1-2
                  uk-grid-small
                  uk-grid
                  gap-4
                  text-sm
                  font-medium
                  text-center
                "
              >
                <li v-for="book in books.docs" :key="book.id">
                  <div
                    class="
                      relative
                      overflow-hidden
                      bg-white
                      shadow
                      md:rounded-lg
                      rounded-md
                    "
                  >
                    <router-link :to="'/books/' + book._id">
                      <img
                        :src="API_URL + '/attachments/' + book.previewImage"
                        alt=""
                        class="w-full h-44 object-cover"
                      />
                      <div class="p-3 truncate">{{ book.name }}</div>
                    </router-link>
                  </div>
                </li>
              </ul>
              <div class="py-4" v-if="books.totalDocs > books.limit">
                <pagination :paginationFields="books" @changePage="fetchBooks($event)" />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 w-full">
          <div class="my-2 flex items-center justify-between pb-2">
            <div>
              <h2 class="text-xl font-semibold">Top Books</h2>
            </div>
          </div>

          <div class="space-y-7 mt-6">
            <div
              v-for="book in books.docs"
              :key="book.id"
              class="p-3 bg-white shadow rounded-md flex items-center space-x-3"
            >
              <img
                :src="`http://localhost:3000/api/attachments/${book.previewImage}`"
                class="w-20 h-24 rounded-lg -mt-7 shadow-md object-contain border"
                alt=""
              />
              <div class="flex-1">
                <div class="font-semibold">{{ book.name }}</div>
                <div class="text-sm">{{ book.author }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: {},
      loading: true,
      API_URL: 'http://localhost:3000/api/'
    }
  },
  mounted () {
    this.fetchBooks();
  },

  methods: {
    fetchBooks(page = 1) {
      this.$http.get('books?page=' + page)
          .then(response => {
            this.loading = false;
            this.books = response.data
          })
    }
  },
};
</script>

<style>
</style>