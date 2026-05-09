<script setup>
  import { RouterView, useRoute } from "vue-router";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  import { computed } from "vue";

  const route = useRoute()

  const isNotFound = computed(() => route.name === "not-found")
</script>

<template>
  <Header v-if="!isNotFound" />

  <main id="main" :class="{ noHeader: isNotFound }">
    <RouterView />
  </main>

  <Footer v-if="!isNotFound" />
</template>

