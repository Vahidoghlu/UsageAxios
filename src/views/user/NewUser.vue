<template>
  <div class="container pt-5">
    <h3>Əlavə et</h3>
    <hr>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Ad Soyad</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Adı daxil et..." required>
      </div>
      <div class="form-group">
        <label>Haqqında</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Haqqında..." required>
      </div>
      <div class="form-group">
        <label>Şəkil linki</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Şəkil link..." required>
      </div>
      <div class="form-group">
        <label>Mətn</label>
        <input v-model="post.previewText" type="text" class="form-control"
               placeholder="Mətn daxil et..." required>
      </div>
      <div class="form-group">
        <label>Yazı</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control" required></textarea>
      </div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <button @click="$router.push('/')" class="btn btn-danger" :disabled="isLoading">Ləğv et</button>
      <button type="submit" class="btn btn-info" :disabled="isLoading">{{ isLoading ? 'Gözləyir...' : 'Yadda saxla' }}</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        author: "",
        content: "",
        previewText: "",
        thumbnail: "",
        title: "",
      },
      isLoading: false,
      errorMessage: "",
    }
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      axios.post("https://vuejs-axios-lesson-default-rtdb.firebaseio.com/posts.json", this.post)
          .then(response => {
            console.log(response)
            this.post = {};
            this.errorMessage = "";
            this.$router.push('/posts')
          })
          .catch(e => {
            this.errorMessage = e.message ?? "Formu submit etmək mümkün olmadı";
            console.log(e)})
          .finally(() => {
            this.isLoading = false;
          });

    }
  }
}
</script>
