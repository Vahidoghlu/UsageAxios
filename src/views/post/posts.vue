<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Siyahı</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="post in postList" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h4 class="card-title"> {{ post.author }}</h4>
          <h5 class="card-title"> {{ post.title }}</h5>
          <p class="card-text"> {{ post.previewText }}</p>
          <p class="card-text"> {{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "posts",
  data(){
    return {
      postList : []
    }
  },
  created(){
    axios.get("https://vuejs-axios-lesson-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
          let data = response.data;
          console.log(response.data)
          for(let key in data){
            this.postList.push({ ...data[key], id : key })
          }
        })
  }

  //ALternativ
  // async created() {
  //   try {
  //     const response = await axios.get("https://vuejs-axios-lesson-default-rtdb.firebaseio.com/posts.json");
  //     this.postList = Object.entries(response.data).map(([id, post]) => ({ ...post, id }));
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   }
  // },

}
</script>
