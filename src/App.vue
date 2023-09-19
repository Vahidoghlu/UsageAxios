<template>
  <div class="container-fluid p-0 transition__main">
    <HeaderMain />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";

export default {
  components: {
    HeaderMain
  }
};
</script>
