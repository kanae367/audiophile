<script setup lang="ts">
import router from '@/router'
import CheckedIcon from './icons/CheckedIcon.vue'
import { useCart } from '@/scripts/store'
import { ref } from 'vue'
const cart = useCart()
const mostExpensive = cart.products.sort((a, b): any => a.price * a.amount < b.price * b.amount)
const isOpen = ref(false)
const handleBackBtnClick = () => {
  router.push('/')
  cart.clearAll()
}
</script>
<template>
  <div class="modal-outer">
    <div class="modal">
      <CheckedIcon />
      <h2 class="title">
        THANK YOU <br />
        FOR YOUR ORDER
      </h2>
      <p class="subtitle">You will receive an email confirmation shortly.</p>
      <div class="container">
        <div class="items">
          <div class="item" v-if="!isOpen">
            <img
              class="item-image"
              :src="`/assets/cart/image-${mostExpensive[0].slug}.jpg`"
              :alt="mostExpensive[0].name"
            />
            <div class="item-desc">
              <div class="item-title">{{ mostExpensive[0].name.split(' ')[0] }}</div>
              <div class="item-price">$ {{ mostExpensive[0].price }}</div>
            </div>
            <div class="item-amount">x{{ mostExpensive[0].amount }}</div>
          </div>
          <div class="item" v-else v-for="item in mostExpensive" :key="item.slug">
            <img class="item-image" :src="`/assets/cart/image-${item.slug}.jpg`" :alt="item.name" />
            <div class="item-desc">
              <div class="item-title">{{ item.name.split(' ')[0] }}</div>
              <div class="item-price">$ {{ item.price }}</div>
            </div>
            <div class="item-amount">x{{ item.amount }}</div>
          </div>
          <button
            class="items-bottom"
            @click="isOpen = true"
            v-if="cart.products.length > 1 && !isOpen"
          >
            and {{ cart.products.length - 1 }} other item(s)
          </button>
          <button class="items-bottom" @click="isOpen = false" v-else>
            {{ cart.products.length > 1 ? 'View less' : 'You have 1 item' }}
          </button>
        </div>

        <div class="total">
          <p class="total__title">Grand Total</p>
          <p class="total__price">
            $ {{ cart.products.reduce((acc, next) => acc + next.price, 0) }}
          </p>
        </div>
      </div>
      <button type="button" class="button modal_bottom" @click="handleBackBtnClick">
        Back To Home
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/shared.css';
.modal-outer {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal {
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  margin: 0 24px;
}

.title {
  margin-top: 23px;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.86px;
  font-weight: bold;
}

.subtitle {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 16px;
}

.container {
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
}

.modal_bottom {
  width: 100%;
  text-align: center;
  display: block;
}

.items {
  background-color: #f1f1f1;
  padding: 24px;
}

.items-bottom {
  position: relative;
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.2px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  padding-top: 16px;
  background-color: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
}

.items-bottom::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #979797;
}

.item {
  display: flex;
  padding-bottom: 12px;
}

.item-image {
  margin-right: 16px;
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item-title {
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
}

.item-price {
  font-size: 14px;
  line-height: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
}

.item-amount {
  margin-left: auto;
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
}

.total {
  padding-left: 24px;
  padding-top: 15px;
  padding-bottom: 19px;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.total__title {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  text-transform: uppercase;
}

.total__price {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
  }

  .title {
    margin-top: 33px;
  }

  .subtitle {
    margin-top: 24px;
  }

  .modal {
    padding: 40px;
  }

  .container {
    margin-top: 33px;
    margin-bottom: 40px;
    display: flex;
    width: 444px;
  }

  .items {
    flex-grow: 1;
  }

  .total {
    flex-grow: 1;
    justify-content: center;
  }

  .item {
    padding-bottom: 16px;
  }
}
</style>
