<script setup lang="ts">
const pageLinks = ['home', 'headphones', 'speakers', 'earphones']
</script>

<template>
  <ul class="list">
    <li v-for="item in pageLinks" :key="item">
      <RouterLink :to="item === 'home' ? '/' : '/' + item" class="link">{{ item }}</RouterLink>
    </li>
  </ul>
</template>

<style>
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
}

.link {
  font-size: 13px;
  font-weight: bold;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.2s color;
}

.link:hover {
  color: #d87d4a;
}

@media screen and (min-width: 768px) {
  .list {
    flex-direction: row;
    gap: 34px;
  }
}

@media screen and (min-width: 1440px) {
  .list {
    justify-content: flex-end;
  }
}
</style>
