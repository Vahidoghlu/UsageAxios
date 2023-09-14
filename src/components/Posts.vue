<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Siyahı</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="post in postList" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h5 class="card-title"> {{ post.name }}</h5>
          <p class="card-text"> {{ post.email }}</p>
        </div>
        <div class="d-flex justify-content-end">
          <router-link
              tag="a"
              exact
              :to="'/posts/' + post.id"
              class="btn text-primary">Ətraflı
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return {
      postList : []
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.postList = response.data;

        })
        .catch(e => console.log(e))
  }
}
</script>
<style>
.card {
  width: 300px;
}
</style>
