<script setup lang="ts">
import OutroItem from '@/components/OutroItem.vue'
import CategoriesList from '@/components/CategoriesList.vue'
import { getItemInfo } from '../scripts/sortData'
import { RouterLink, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
let slug = route.params.slug
let item = getItemInfo(String(slug))
let count = ref(0)
watch(
  () => route.params.slug,
  (newSlug) => {
    slug = newSlug
    item = getItemInfo(String(newSlug))
  }
)
</script>
<template>
  <RouterLink class="product__return" to="/">Go Back</RouterLink>
  <section v-if="item" id="product">
    <div class="product__header">
      <img
        class="product__image"
        :srcset="`${item.image.mobile} 767w, ${item.image.tablet} 1439w, ${item.image.desktop} 1440w`"
        :alt="item.name"
      />
      <div class="product__intro">
        <div v-if="item.new" class="product__new">New Product</div>
        <h1 class="product__title">{{ item.name }}</h1>
        <p class="text">{{ item.description }}</p>
        <p class="product__price">$ {{ item.price }}</p>
        <div class="product__bottom">
          <div class="product__amount">
            <button class="product__amount-button">-</button>
            {{ count }}
            <button class="product__amount-button">+</button>
          </div>
          <button class="button">Add To Cart</button>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="features">
        <h3 class="title">Features</h3>
        <p class="text">
          {{ item.features }}
        </p>
      </div>
      <div class="box">
        <h3 class="title">In The Box</h3>
        <ul class="box__list">
          <li class="box__item text" v-for="one in item.includes" :key="one.item">
            <span class="box__amount">{{ one.quantity }}x</span>
            {{ one.item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="gallery">
      <ul class="gallery__list">
        <li class="gallery__list-item" v-for="one in item.gallery" :key="one.mobile">
          <img
            class="gallery__image"
            :srcset="`${one.mobile} 767w, ${one.tablet} 1439w, ${one.desktop} 1440w`"
            alt="image"
          />
        </li>
      </ul>
    </div>
    <div class="recommended">
      <h3 class="recommended__title title">You May Also Like</h3>
      <ul class="recommended__list">
        <li class="recommended__item" v-for="one in item.others" :key="one.slug">
          <img
            class="recommended__image"
            :srcset="`${one.image.mobile} 767w, ${one.image.tablet} 1439w, ${one.image.desktop} 1440w`"
            :alt="one.name"
          />
          <h4 class="recommended__item-title">{{ one.name }}</h4>
          <RouterLink class="button button_center" :to="`/product/` + one.slug"
            >See Product</RouterLink
          >
        </li>
      </ul>
    </div>
  </section>
  <CategoriesList />
  <OutroItem />
</template>

<style scoped>
#product {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  gap: 88px;
}

.product__return {
  font-size: 15px;
  padding: 16px 24px;
  color: black;
  opacity: 0.5;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 9px;
  text-decoration: none;
  display: inline-block;
}

.product__image {
  margin-bottom: 32px;
  width: 100%;
  border-radius: 8px;
}

.product__intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product__new {
  font-size: 14px;
  letter-spacing: 10px;
  color: #d87d4a;
  text-transform: uppercase;
}

.product__title {
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
}

.text {
  font-size: 15px;
  line-height: 25px;
  color: black;
  opacity: 0.5;
  font-weight: 500;
}

.product__price {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.3px;
}

.product__bottom {
  display: flex;
  justify-content: space-between;
}

.product__amount {
  display: flex;
  background-color: #f1f1f1;
  width: 120px;
  justify-content: space-between;
  align-items: center;
}

.product__amount-button {
  border: none;
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;
  padding: 15px;
  font-size: 13px;
  font-weight: bold;
}

.product__amount-button:hover {
  color: #d87d4a;
}

.button {
  width: 160px;
  background-color: #d87d4a;
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1px;
  padding: 15px 0;
  text-decoration: none;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #fbaf85;
  cursor: pointer;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.box__list {
  list-style: none;
}

.box__item {
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
}

.box__amount {
  font-size: 15px;
  line-height: 25px;
  color: #d87d4a;
  font-weight: bold;
}

.gallery__list {
  list-style: none;
  display: grid;
  gap: 20px;
}

.gallery__image {
  border-radius: 8px;
  display: block;
  width: 100%;
  object-fit: contain;
}

.recommended__title {
  text-align: center;
  margin-bottom: 40px;
}

.recommended__list {
  display: flex;
  flex-direction: column;
  gap: 56px;
  list-style: none;
}

.recommended__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.recommended__image {
  border-radius: 8px;
  width: 100%;
}

.recommended__item-title {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.7px;
  text-transform: uppercase;
}

.button_center {
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 88px;
}

@media screen and (min-width: 768px) {
  #product {
    padding: 0 40px;
    gap: 120px;
    margin-bottom: 20px;
  }

  .product__return {
    padding: 10px 40px;
    margin-top: 23px;
    margin-bottom: 24px;
  }
  .product__header {
    display: flex;
    gap: 69px;
    align-items: center;
    height: 460px;
  }

  .product__image {
    object-fit: contain;
    width: auto;
    height: 100%;
    flex-shrink: 0;
    margin-bottom: 0;
  }

  .product__intro {
    width: 340px;
    gap: 32px;
  }

  .product__new {
    font-size: 12px;
    letter-spacing: 8.5px;
    font-weight: 400;
    margin-bottom: -16px;
  }

  .wrapper {
    gap: 120px;
  }

  .title {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.1px;
  }

  .box {
    flex-direction: row;
    gap: 162px;
  }

  .gallery__list {
    grid-template-columns: 1fr 1.42fr;
    grid-template-areas: 'first third' 'second third';
  }

  .gallery__list-item:first-child {
    grid-area: first;
  }

  .gallery__list-item:nth-child(2) {
    grid-area: second;
  }

  .gallery__list-item:last-child {
    grid-area: third;
  }

  .gallery__image {
    height: 100%;
  }

  .recommended__list {
    flex-direction: row;
    gap: 11px;
  }
}

@media screen and (min-width: 1440px) {
  #product {
    padding: 0 165px;
    gap: 160px;
  }

  .product__return {
    padding: 0;
    margin-left: 165px;
    margin-top: 76px;
    margin-bottom: 56px;
  }

  .product__header {
    height: 560px;
    gap: 124px;
  }

  .product__new {
    font-size: 14px;
    letter-spacing: 10px;
  }

  .product__title {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.5px;
  }

  .product__intro {
    width: auto;
  }

  .product__bottom {
    gap: 16px;
    justify-content: unset;
  }

  .wrapper {
    flex-direction: row;
    gap: 125px;
  }

  .features {
    width: 635px;
  }

  .box {
    flex-direction: column;
    flex-shrink: 0;
    gap: 32px;
  }

  .recommended__list {
    gap: 30px;
  }
}
</style>
