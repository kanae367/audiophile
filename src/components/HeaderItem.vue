<script setup lang="ts">
import CategoriesList from './CategoriesList.vue'
import AudiophileIcon from './icons/AudiophileIcon.vue'
import CartIcon from './icons/CartIcon.vue'
import NavigationBar from './NavigationBar.vue'
import CartItem from './CartItem.vue'
import { useMediaQuery } from '@vueuse/core'
import { useCart } from '../scripts/store'
import { ref } from 'vue'
const cart = useCart()

const isLargeScreen = useMediaQuery('(min-width: 1440px)')
const isMenuVisible = ref(false)
</script>
<template>
  <header class="header">
    <button v-if="!isLargeScreen" @click="isMenuVisible = !isMenuVisible" class="menu-button">
      <div class="menu-button__inner"></div>
      <div class="menu-button__inner"></div>
      <div class="menu-button__inner"></div>
    </button>

    <div v-if="isMenuVisible && !isLargeScreen" class="menu">
      <CategoriesList />
    </div>

    <AudiophileIcon />

    <nav class="nav" v-if="isLargeScreen">
      <NavigationBar />
    </nav>

    <button class="cart-button" @click="cart.changeVisibility">
      <CartIcon />
    </button>
  </header>

  <CartItem v-if="cart.isVisible" />
</template>

<style>
.header {
  background: #191919;
  padding: 32px 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding-bottom: 35px;
  background-color: white;
}

.menu::after {
  content: '';
  position: absolute;
  top: 100%;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

@media screen and (min-width: 768px) {
  .menu {
    padding-bottom: 67px;
  }
}

.header::after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 24px;
  right: 24px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-button {
  width: 16px;
  height: 16px;
  background-color: unset;
  border: unset;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.menu-button__inner {
  width: 100%;
  height: 3px;
  background-color: white;
}

.cart-button {
  background-color: unset;
  border: unset;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 32px 40px;
  }

  .header::after {
    left: 40px;
    right: 40px;
  }

  .audiophile-icon {
    margin-right: auto;
    margin-left: 42px;
  }
}

@media screen and (min-width: 1440px) {
  .header {
    padding: 36px 165px;
    justify-content: unset;
  }

  .header::after {
    left: 165px;
    right: 165px;
  }

  .audiophile-icon {
    margin-left: 0;
    margin-right: 197px;
  }

  .nav {
    margin-right: auto;
  }
}
</style>
