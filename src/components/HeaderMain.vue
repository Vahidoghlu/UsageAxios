<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">

    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
            v-for="(link, to) in links"
            :key="to"
            tag="li"
            class="nav-item"
            active-class="active"
            :exact="true"
            :to="to"
        >
          <a class="nav-link" href="#">{{ link }}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {links} from "@/lib/const/details";
</script>
