<template>
  <div v-if="!isLoading" class="container-fluid pt-5">
    <h1 class="text-center">Ətraflı</h1>
    <div class="d-flex justify-content-start">
      <router-link
          tag="a"
          exact
          to="/posts"
          class="btn text-danger">Geri
      </router-link>
    </div>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
        <div class="card-body">
          <p class="card-title row"><b class="col-1">Id:</b>  <i>{{ userDetail.id }}</i></p>
          <p class="card-title row"><b class="col-1">Ad:</b>  <i>{{ userDetail.name }}</i></p>
          <p class="card-text row"><b class="col-1">Email:</b> <i>{{ userDetail.email }}</i> </p>
          <p class="card-text row"><b class="col-1">Login:</b> <i>{{ userDetail.username }}</i></p>
          <hr>
          <h5><b>Ünvan</b></h5>
          <p class="card-text row"> <b class="col-1">Küçə adı:</b> <i>{{ userDetail.address.street }}</i></p>
          <p class="card-text row"><b class="col-1">Mənzil:</b>  <i>{{ userDetail.address.suite }}</i></p>
          <p class="card-text row"><b class="col-1">Şəhər:</b>  <i>{{ userDetail.address.city }}</i></p>
          <p class="card-text row"><b class="col-1">Zip: </b> <i>{{ userDetail.address.zipcode }}</i></p>
          <div class="row">
            <p class="col-1"><b>geo</b></p>
            <ul class="p-0 no-bullet">
              <li><small>lat: <i>{{ userDetail.address.geo.lat }}</i></small></li>
              <li><small>lng: <i>{{ userDetail.address.geo.lng }}</i></small></li>
            </ul>
          </div>
          <p class="card-text row"><b class="col-1">Telefon:</b> <i>{{ userDetail.phone }}</i> </p>
          <p class="card-text row"><b class="col-1">Vebsayt:</b>  <i>{{ userDetail.website }}</i></p>
          <hr>
          <h5><b>İş yeri</b></h5>
          <p class="card-text row"><b class="col-1">Ad:</b> <i>{{ userDetail.company.name }}</i> </p>
          <p class="card-text row"><b class="col-1">Sloqan:</b> <i>{{ userDetail.company.catchPhrase }}</i> </p>
          <p class="card-text row"><b class="col-1">BS:</b> <i>{{ userDetail.company.bs }}</i> </p>
        </div>

    </div>
  </div>
  <div v-else class="loading-indicator">Loading...</div>
</template>
<script>
import {mapFields} from "vuex-map-fields";
import {mapActions} from "vuex";

export default {
  data(){
    return{
      isLoading: false
    }
  },
  computed : {
    ...mapFields('userList', ['userDetail']),
  },
  methods: {
    ...mapActions('userList', ['getUserDetails'])
  },
  created(){
    const userId = this.$route.params.id;
    this.isLoading=true
    this.getUserDetails(userId).finally(()=>{
      this.isLoading=false
    })
  },
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