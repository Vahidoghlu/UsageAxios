<template>
  <div class="container pt-5">
    <h3>Əlavə et</h3>
    <hr>

    <form @submit.prevent>
      <div class="form-group">
        <label>Ad Soyad</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Adı daxil et...">
        <div v-if="v$.post.author.$error" class="text-danger">Ad Soyad boş olmamalıdır.</div>
      </div>
      <div class="form-group">
        <label>Haqqında</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Haqqında...">
        <div v-if="v$.post.title.$error" class="text-danger">Haqqında boş olmamalıdır.</div>
      </div>
      <div class="form-group">
        <label>Şəkil linki</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Şəkil link...">
        <div v-if="v$.post.thumbnail.$error && v$.post.thumbnail.url" class="text-danger">Düzgün URL daxil edin.</div>
      </div>
      <div class="form-group">
        <label>Mətn</label>
        <input v-model="post.previewText" type="text" class="form-control"
               placeholder="Mətn daxil et...">
        <div v-if="v$.post.previewText.$error" class="text-danger">Mətn boş olmamalıdır.</div>
      </div>
      <div class="form-group">
        <label>Yazı</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control"></textarea>
        <div v-if="v$.post.content.$error" class="text-danger">Yazı boş olmamalıdır.</div>
      </div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <button @click="$router.push('/')" class="btn btn-danger" :disabled="isLoading">Ləğv et</button>
      <button @click="submitForm" type="submit" class="btn btn-info" :disabled="isLoading">{{ isLoading ? 'Gözləyir...' : 'Yadda saxla' }}</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { useVuelidate } from '@vuelidate/core'
import { required, url } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
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

  validations () {
    return {
      post: {
        author: {required},
        content: {required},
        previewText: {required},
        thumbnail: {required, url},
        title: {required}
      }
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
            this.$router.push('/posts');
            this.v$.$reset();
          })
          .catch(e => {
            this.errorMessage = e.message ?? "Formu submit etmək mümkün olmadı";
            console.log(e)})
          .finally(() => {
            this.isLoading = false;
          });
    },
    submitForm() {
      this.v$.post.$touch();
      if (this.v$.$invalid) {
        return;
      }
      this.onSubmit();
    },
  }
}
</script>
