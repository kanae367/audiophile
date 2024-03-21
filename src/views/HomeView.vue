<script setup lang="ts">
import CategoriesList from '@/components/CategoriesList.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <section id="hero">
      <img
        class="hero__image"
        alt="Headphones"
        :srcset="'/assets/home/mobile/image-header.jpg 767w, /assets/home/tablet/image-header.jpg 1439w, /assets/home/desktop/image-hero.jpg 1440w '"
      />
      <div class="hero__overlay">
        <h4 class="hero__special">New Product</h4>
        <h2 class="hero__title">XX99 Mark II Headphones</h2>
        <p class="hero__description">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <RouterLink class="hero__button" to="/">See Product</RouterLink>
      </div>
    </section>
    <CategoriesList />
  </main>
</template>

<style scoped>
#hero {
  position: relative;
}

.hero__overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  inset: 0;
  padding: 0 24px;
  padding-top: 108px;
  text-align: center;
  text-transform: uppercase;
}

.hero__image {
  object-fit: contain;
  width: 100%;
  margin-top: -89px;
}

.hero__special {
  font-size: 14px;
  letter-spacing: 10px;
  color: #fff;
  opacity: 0.5;
  margin-bottom: 16px;
  font-weight: normal;
}

.hero__title {
  max-width: 400px;
  color: #fff;
  font-weight: bold;
  font-size: 38px;
  line-height: 40px;
  letter-spacing: 1.25px;
  margin-bottom: 24px;
}

.hero__description {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: #fff;
  opacity: 0.75;
  margin-bottom: 43px;
  text-transform: none;
  max-width: 350px;
}

.hero__button {
  padding: 15px 30px;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: #d87d4a;
  transition: background-color 0.2s;
}

.hero__button:hover {
  background-color: #fbaf85;
}

@media screen and (min-width: 768px) {
  .hero__overlay {
    padding-top: 126px;
  }

  .hero__special {
    margin-bottom: 24px;
  }

  .hero__title {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }

  .hero__description {
    margin-bottom: 55px;
  }
}

@media screen and (min-width: 1440px) {
  .hero__overlay {
    text-align: left;
    align-items: start;
    padding-left: 165px;
    padding-right: 165px;
  }
}
</style>
