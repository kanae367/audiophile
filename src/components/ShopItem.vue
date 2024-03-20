<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  imageSrc: string
  name: string
  description: string
  isNew: boolean
}>()
</script>

<template>
  <li class="item">
    <div class="item__header">
      <img :src="props.imageSrc" :alt="props.name" />
    </div>
    <div class="item__bottom">
      <div v-if="props.isNew" class="item__special">New Product</div>
      <h2 class="item__title">{{ props.name }}</h2>
      <p class="item__description">{{ props.description }}</p>
      <RouterLink to="/" class="item__button">See Product</RouterLink>
    </div>
  </li>
</template>

<style scoped>
.item {
  padding: 0 24px;
}

.item__header {
  height: 352px;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  padding-top: 41px;
  justify-content: center;
  margin-bottom: 32px;
}

.item__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.item__special {
  font-size: 14px;
  letter-spacing: 10px;
  color: #d87d4a;
  text-transform: uppercase;
}

.item__title {
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: bold;
}

.item__description {
  font-size: 15px;
  line-height: 25px;
  font-weight: medium;
  opacity: 0.5;
}

.item__button {
  padding: 15px 31px;
  background-color: #d87d4a;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
