<script setup lang="ts">
import ShopItem from '@/components/ShopItem.vue'
import data from '../data.json'
const earphones = data
  .filter((item) => item.category === 'earphones')
  .sort((a, b) => Number(b.new) - Number(a.new))
</script>

<template>
  <div class="container">
    <h1 class="page__header">Speakers</h1>
    <ul class="page__list">
      <ShopItem
        v-for="item in earphones"
        :key="item.id"
        :imageSrc="item.image.mobile"
        :name="item.name"
        :description="item.description"
        :isNew="item.new"
      />
    </ul>
  </div>
</template>

<style scoped>
.page__header {
  width: 100%;
  color: #fff;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 32px 0;
  text-align: center;
  background-color: #191919;
  margin-bottom: 64px;
  text-transform: uppercase;
}

.page__list {
  display: flex;
  flex-direction: column;
  gap: 120px;
}
</style>
