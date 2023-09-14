<script>
import axios from "axios";

export default {
  data(){
    return {
      id:'',
      postList : []
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.id= this.$route.params.id-1
          this.postList = response.data;


        })
        .catch(e => console.log(e))
  }
}
</script>

<template>
  <div class="container-fluid pt-5">
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
          <p class="card-title row"><b class="col-1">Id:</b>  <i>{{ postList[this.id].id }}</i></p>
          <p class="card-title row"><b class="col-1">Ad:</b>  <i>{{ postList[this.id].name }}</i></p>
          <p class="card-text row"><b class="col-1">Email:</b> <i>{{ postList[this.id].email }}</i> </p>
          <p class="card-text row"><b class="col-1">Login:</b> <i>{{ postList[this.id].username }}</i></p>
          <hr>
          <h5><b>Ünvan</b></h5>
          <p class="card-text row"> <b class="col-1">Küçə adı:</b> <i>{{ postList[this.id].address.street }}</i></p>
          <p class="card-text row"><b class="col-1">Mənzil:</b>  <i>{{ postList[this.id].address.suite }}</i></p>
          <p class="card-text row"><b class="col-1">Şəhər:</b>  <i>{{ postList[this.id].address.city }}</i></p>
          <p class="card-text row"><b class="col-1">Zip: </b> <i>{{ postList[this.id].address.zipcode }}</i></p>
          <div class="row">
            <p class="col-1"><b>geo</b></p>
            <ul class="p-0 no-bullet">
              <li><small>lat: <i>{{ postList[this.id].address.geo.lat }}</i></small></li>
              <li><small>lng: <i>{{ postList[this.id].address.geo.lng }}</i></small></li>
            </ul>
          </div>
          <p class="card-text row"><b class="col-1">Telefon:</b> <i>{{ postList[this.id].phone }}</i> </p>
          <p class="card-text row"><b class="col-1">Vebsayt:</b>  <i>{{ postList[this.id].website }}</i></p>
          <hr>
          <h5><b>İş yeri</b></h5>
          <p class="card-text row"><b class="col-1">Ad:</b> <i>{{ postList[this.id].company.name }}</i> </p>
          <p class="card-text row"><b class="col-1">Sloqan:</b> <i>{{ postList[this.id].company.catchPhrase }}</i> </p>
          <p class="card-text row"><b class="col-1">BS:</b> <i>{{ postList[this.id].company.bs }}</i> </p>
        </div>

    </div>
  </div>
</template>

<style scoped>
.no-bullet li {
  list-style: none;
}
</style>