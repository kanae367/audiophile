<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterItem from './components/FooterItem.vue'
import HeaderItem from './components/HeaderItem.vue'
</script>

<template>
  <HeaderItem />

  <RouterView />

  <FooterItem />
</template>

<style scoped></style>
