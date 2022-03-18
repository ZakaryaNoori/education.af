<template>
  <div class="main_content h-screen flex justify-center items-center">
      <ul class="w-full min-h-screen p-4">
        <div v-for="attachment in lecture.attachments" :key="attachment.id" class="border-b border-gray-300 pb-5 mb-5">
          <video 
            :src="'http://localhost:3000/api/attachments/' + attachment._id"
            controls
            v-if="attachment.mime == 'video/mp4'">
          </video>
          <img
            v-if="attachment.mime == 'image/jpeg' || attachment.mime == 'image/png'"
            :src="'http://localhost:3000/api/attachments/' + attachment._id"
            alt="">
        </div>
        <p class="pr-20 mb-4">
          {{ lecture.description }}
        </p>
        <div v-if="lecture.embedLink" class="text-lg">
          Embed Link watch on youtube: <a :href="lecture.embedLink" class="text-blue-500" target="_blank">{{ lecture.embedLink }}</a>
        </div>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lecture: {}
    }
  },

  mounted () {
    this.fetchLectures();
  },

  watch: {
    '$route'() {
      this.fetchLectures()
    }
  },

  methods: {
    fetchLectures() {
      this.$http.get('/lectures/' + this.$route.params.lectureId)
      .then(res => {
        this.lecture = res.data
        console.log(this.lecture)
      })
      .catch(err => {
        console.error(err);
      })
    },
  },
}
</script>

<style>

</style>