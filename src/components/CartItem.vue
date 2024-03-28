<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCart } from '@/scripts/store'
const cart = useCart()
const products = cart.products

function handleModalClick(e: Event) {
  const target = e.target as HTMLElement
  if (target.className !== 'modal-overlay') return
  cart.changeVisibility()
}
</script>

<template>
  <div class="modal-overlay" @click="handleModalClick"></div>
  <div class="modal">
    <div class="modal__header">
      <h2 class="modal__title">Cart ({{ products.length }})</h2>
      <button class="modal__header-button" @click="cart.clearAll">Remove all</button>
    </div>

    <ul class="list">
      <li v-for="item in products" :key="item.slug" class="list__item">
        <img
          class="list__item-image"
          :src="`/assets/cart/image-${item.slug}.jpg`"
          :alt="item.name"
        />
        <div class="list__item-info">
          <h3 class="list__item-title">{{ item.name }}</h3>
          <p class="list__item-price">$ {{ item.price }}</p>
        </div>
        <div class="list__item-buttons">
          <button class="list__item-button" @click="cart.changeAmount(item, false)">-</button>
          {{ item.amount }}
          <button class="list__item-button" @click="cart.changeAmount(item, true)">+</button>
        </div>
      </li>
    </ul>

    <div class="modal__bottom">
      Total
      <span class="modal__bottom-accent"
        >$ {{ products.reduce((acc, next) => acc + next.price * next.amount, 0) }}</span
      >
    </div>

    <RouterLink to="/checkout" @click="cart.changeVisibility" class="button button_modal"
      >Checkout</RouterLink
    >
  </div>
</template>

<style scoped>
@import '../assets/shared.css';

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 6;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  position: absolute;
  z-index: 7;
  top: 114px;
  right: 24px;
  padding: 32px 28px;
  background-color: white;
  width: 327px;
  border-radius: 8px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.modal__header-button {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  border: none;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
}

.modal__header-button:hover {
  color: #d87d4a;
}

.modal__title {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.modal__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
  margin-top: 32px;
  text-transform: uppercase;
}

.modal__bottom-accent {
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.button_modal {
  display: block;
  width: 100%;
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.list__item {
  display: flex;
  align-items: center;
}

.list__item-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
}

.list__item-title {
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
}

.list__item-price {
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
}

.list__item-buttons {
  background-color: #f1f1f1;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: auto;
}

.list__item-button {
  padding: 7px 12px;
  color: rgba(0, 0, 0, 0.25);
  background-color: transparent;
  border: none;
}

@media screen and (min-width: 768px) {
  .modal {
    width: 327px;
    right: 40px;
    padding: 31px 32px;
  }
}

@media screen and (min-width: 1440px) {
  .modal {
    right: 165px;
    top: 130px;
  }
}
</style>
