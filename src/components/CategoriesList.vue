<script setup lang="ts">
import { RouterLink } from 'vue-router'
const categories = [
  { name: 'headphones', image: '/assets/shared/desktop/image-headphones.png' },
  { name: 'speakers', image: '/assets/shared/desktop/image-speakers.png' },
  { name: 'earphones', image: '/assets/shared/desktop/image-earphones.png' }
]
</script>

<template>
  <section id="categories">
    <ul class="list">
      <li class="list__item" v-for="item in categories" :key="item.name">
        <img class="list__item-image" :src="item.image" :alt="item.name" />
        <h3 class="list__item-header">
          {{ item.name }}
        </h3>
        <RouterLink :to="item.name" class="list__item-link">Shop</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 68px;
  margin-top: 92px;
  align-items: center;
}

.list__item {
  position: relative;
  border-radius: 8px;
  width: 327px;
  text-align: center;
  background-color: #f1f1f1;
  text-transform: uppercase;
  padding-top: 88px;
  padding-bottom: 22px;
}

.list__item-image {
  height: 140px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.list__item-header {
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 17px;
}

.list__item-link {
  position: relative;
  color: #000;
  opacity: 0.5;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1px;
  text-decoration: none;
}

.list__item-link::after {
  content: '';
  width: 8px;
  height: 8px;
  border-left: 2px solid #d87d4a;
  border-top: 2px solid #d87d4a;
  position: absolute;
  top: 4.5px;
  box-sizing: border-box;
  transform: rotate(135deg);
  left: calc(100% + 6px);
}

@media screen and (min-width: 768px) {
  .list {
    flex-direction: row;
    gap: 10px;
    padding: 0 40px;
    margin-top: 150px;
  }
}

@media screen and (min-width: 1440px) {
  .list {
    gap: 30px;
    padding: 0 165px;
    margin-top: 200px;
  }
}
</style>
