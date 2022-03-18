<template>
  <!-- Main Contents -->
  <div class="main_content">
    <div class="container">
      <div class="flex align-self-center justify-between">
        <div class="text-2xl font-semibold text-black">
          Browse categories
        </div>
        <a class="button" href="#modal-example" uk-toggle v-if="$store.state.user.user.role == 'Admin'">Add Category</a>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-10">
        <router-link
          v-for="category in categories"
          :key="category._id"
          :to="`/courses?category=${category.name}`"
          class="rounded-md overflow-hidden relative w-full lg:h-48 h-40 cursor-pointer"
        >
          <div
            class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"
          ></div>
          <img
            :src="API_URL + 'attachments/' + category.image"
            class="absolute w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"
          >
            {{ category.name }}
          </div>
        </router-link>
      </div>

      <div id="modal-example" uk-modal>
        <div class="uk-modal-body uk-modal-dialog rounded-md shadow-2xl">
          <h2 class="uk-modal-title mb-5">Add Category</h2>
          <div class="mb-3">
            <label for="" class="text-sm mb-1">Name</label>
            <input
              type="text"
              class="with-border"
              v-model="category.name"
              placeholder="Web Development"
            />
          <p class="text-sm text-red-500 mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <label for="attachment" class="text-sm mb-0">Image</label>
            <input
              type="file"
              class="with-border"
              @change="uploadFile('image')"
              ref="image"
            />
            <p class="text-sm text-red-500 mt-1">{{ errors.image }}</p>
          </div>
          <div
            class="uk-modal-footer text-right mt-6 px-0 space-x-1 pb-0 border-transparent"
          >
            <button class="button gray uk-modal-close" type="button">
              Cancel
            </button>
            <button class="button" type="button" @click="addCategory()">
              Save
            </button>
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
      categories: null,
      loading: true,
      API_URL: "http://localhost:3000/api/",
      category: {},
      errors: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },

  methods: {
    fetchCategories() {
      this.$http.get("categories").then((response) => {
        this.loading = false;
        this.categories = response.data;
      });
    },

    addCategory() {
      this.$http
        .post("/categories", this.category)
        .then((res) => {
          UIkit.notification({
            message: "Category added successfully.",
            pos: "top-right",
            status: "success",
          });

          // close modal
          document.getElementById("modal-example").classList.remove("uk-open");
          // clear form
          this.category = {};

          this.fetchCategories();
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },

    uploadFile(field) {
      const formData = new FormData();
      formData.append("file", this.$refs[field].files[0]);

      this.$http
        .post("/attachments", formData)
        .then((res) => {
          this.category[field] = res.data._id;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
