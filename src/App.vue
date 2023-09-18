<template>
  <div class="container-fluid p-0 transition__main">
    <HeaderMain></HeaderMain>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";

export default {
  components: {
    HeaderMain
  },
};
</script>

