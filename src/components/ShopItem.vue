<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  imageSrc: {
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  description: string
  isNew: boolean
}>()
</script>

<template>
  <li class="item">
    <div class="item__header">
      <img
        class="item__image"
        :srcset="`${props.imageSrc.mobile} 767w, ${props.imageSrc.tablet} 1439w, ${props.imageSrc.desktop} 1440w`"
        :alt="props.name"
      />
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

.item__image {
  display: block;
  margin: 0 auto;
  object-fit: contain;
  width: 100%;
  max-width: 350px;
}

.item__header {
  height: 352px;
  background-color: #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
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
  max-width: 300px;
}

.item__description {
  font-size: 15px;
  line-height: 25px;
  font-weight: medium;
  opacity: 0.5;
  max-width: 572px;
}

.item__button {
  padding: 15px 31px;
  background-color: #d87d4a;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .item {
    padding: 0 40px;
  }

  .item__image {
    object-position: 0 -80px;
    max-width: 500px;
    width: auto;
    max-height: 500px;
  }

  .item__bottom {
    gap: 32px;
  }

  .item__header {
    margin-bottom: 52px;
  }

  .item__title {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4px;
  }
}

@media screen and (min-width: 1440px) {
  .item {
    display: flex;
    padding: 0 165px;
    flex-direction: row;
    gap: 125px;
    align-items: center;
  }

  .item:nth-child(2n) {
    flex-direction: row-reverse;
  }

  .item__header {
    height: 560px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-bottom: 0;
  }

  .item__image {
    object-position: unset;
  }

  .item__bottom {
    width: 445px;
    text-align: left;
  }

  .item__title {
    margin-right: auto;
  }

  .item__button {
    margin-right: auto;
  }

  .item__special {
    margin-right: auto;
  }
}
</style>
