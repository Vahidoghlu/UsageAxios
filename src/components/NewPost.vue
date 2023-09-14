<template>
  <div class="container pt-5">
    <h3>Əlavə et</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Ad Soyad</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Adı daxil et...">
      </div>
      <div class="form-group">
        <label>Haqqında</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Haqqında...">
      </div>
      <div class="form-group">
        <label>Şəkil linki</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Şəkil link...">
      </div>
      <div class="form-group">
        <label>Mətn</label>
        <input v-model="post.previewText" type="text" class="form-control"
               placeholder="Mətn daxil et...">
      </div>
      <div class="form-group">
        <label>Yazı</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control"></textarea>
      </div>
      <button @click="$router.push('/')" class="btn btn-danger">Ləğv et</button>
      <button type="submit" class="btn btn-info">Yadda saxla</button>
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
      }
    }
  },
  methods: {
    onSubmit() {
      axios.post("/posts.json", {...this.post, updatedDate: new Date()})
          .then(response => {
            console.log(response)
            this.post = {}
          })
          .catch(e => console.log(e));

    }
  }
}
</script>
