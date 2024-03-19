<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <FooterItem />
</template>

<style scoped></style>
