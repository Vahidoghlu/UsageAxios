<template>
  <div v-if="!isLoading" class="container-fluid pt-5">
    <h1 class="text-center">Siyahı</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="user in users" class="card m-1">
        <img class="card-img-top" :src="user.thumbnail" :alt="user.title">
        <div class="card-body">
          <h5 class="card-title"> {{ user.name }}</h5>
          <p class="card-text"> {{ user.email }}</p>
        </div>
        <div class="d-flex justify-content-end">
          <router-link
              tag="a"
              exact
              :to="'/users/' + user.id"
              class="btn text-primary">Ətraflı
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading-indicator">Loading...</div>
</template>
<script>
import {mapFields} from "vuex-map-fields";

export default {
  data(){
    return{
      isLoading: false
    }
  },
  computed: {
    ...mapFields('userList', ['users'])
  },
  created(){
    this.isLoading=true
    this.$store.dispatch('userList/getUsers').then(response => {
          this.$store.commit('userList/setUsers', response.data);
      }).finally(response => {
      this.isLoading=false
    });
  }
}
</script>

<style>
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>