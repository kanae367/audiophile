<script setup lang="ts">
import ShopItem from '@/components/ShopItem.vue'
import CategoriesList from '@/components/CategoriesList.vue'
import OutroItem from '@/components/OutroItem.vue'
import data from '../data.json'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import getCategoryItems from '@/scripts/sortData'

const route = useRoute()

let category = String(useRoute().params.category)

let items = getCategoryItems(category, data)

watch(
  () => route.params.category,
  (newCategory) => {
    ;(category = String(newCategory)), (items = getCategoryItems(category, data))
  }
)
</script>

<template>
  <div class="container">
    <h1 class="page__header">{{ category }}</h1>
    <ul class="page__list">
      <ShopItem
        v-for="item in items"
        :key="item.id"
        :imageSrc="item.image"
        :name="item.name"
        :description="item.description"
        :isNew="item.new"
      />
    </ul>
  </div>

  <CategoriesList />

  <OutroItem />
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

@media screen and (min-width: 768px) {
  .page__header {
    padding-bottom: 97px;
    padding-top: 105px;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4px;
  }
}

@media screen and (min-width: 1440px) {
  .page__header {
    margin-bottom: 160px;
  }

  .page__list {
    gap: 160px;
  }
}
</style>
