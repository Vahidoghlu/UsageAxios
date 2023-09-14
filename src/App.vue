<script>
import HeaderMain from "@/components/HeaderMain.vue";
export default {
  components : {
    HeaderMain
  }
}
</script>

<template>

  <div class="container-fluid p-0 transition__main">
    <HeaderMain></HeaderMain>
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

  </div>

</template>

<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
