<script setup lang="ts">
import CategoriesList from '@/components/CategoriesList.vue'
import OutroItem from '@/components/OutroItem.vue'
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
        <RouterLink class="button" to="/">See Product</RouterLink>
      </div>
    </section>
    <CategoriesList />
    <section id="recommended">
      <div class="recommended__special">
        <img
          class="recommended__special-image"
          :srcset="'/assets/home/mobile/image-speaker-zx9.png 767w, /assets/home/tablet/image-speaker-zx9.png 1439w, /assets/home/desktop/image-speaker-zx9.png 1440w'"
          alt="zx9 speakers"
        />
        <div class="recommended__special-content">
          <h4 class="recommended__special-title">ZX9 Speaker</h4>
          <p class="recommended__special-desc">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <RouterLink to="/" class="button button_special">See Product</RouterLink>
        </div>
      </div>
      <div class="recommended__item">
        <img
          class="recommended__item-imagebg"
          :srcset="'/assets/home/mobile/image-speaker-zx7.jpg 767w, /assets/home/tablet/image-speaker-zx7.jpg 1439w, /assets/home/desktop/image-speaker-zx7.jpg 1440w'"
          alt="zx7 speaker"
        />
        <div class="recommended__item-overlay">
          <h4 class="recommended__item-title">ZX7 Speaker</h4>
          <RouterLink to="/" class="button button_bordered">See Product</RouterLink>
        </div>
      </div>
      <div class="recommended__item">
        <img
          class="recommended__item-image"
          :srcset="'/assets/home/mobile/image-earphones-yx1.jpg 767w, /assets/home/tablet/image-earphones-yx1.jpg 1439w, /assets/home/desktop/image-earphones-yx1.jpg 1440w'"
          alt="yx1 erphones"
        />
        <div class="recommended__item-content">
          <h4 class="recommended__item-title">YX1 Earphones</h4>
          <RouterLink to="/" class="button button_bordered">See Product</RouterLink>
        </div>
      </div>
    </section>
  </main>
  <OutroItem />
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
  margin-bottom: 28px;
  text-transform: none;
  max-width: 350px;
}

.button {
  padding: 15px 30px;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: #d87d4a;
  transition:
    background-color 0.2s,
    color 0.2s;
  display: inline-block;
  text-transform: uppercase;
}

.button:hover {
  background-color: #fbaf85;
}

.button_bordered {
  background-color: transparent;
  border: 1px solid black;
  color: black;
}

.button_bordered:hover {
  background-color: black;
  color: white;
}

.button_special {
  background-color: black;
}

.button_special:hover {
  background-color: #4c4c4c;
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
    margin-bottom: 40px;
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

#recommended {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

.recommended__special {
  background-color: #d87d4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
  padding-top: 32px;
  padding-bottom: 55px;
  border-radius: 8px;
}

.recommended__special-image {
  margin-bottom: 32px;
  position: relative;
}

.recommended__special-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recommended__special-image::before {
  position: absolute;
  content: '';
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.recommended__special-title {
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.3px;
  color: white;
  margin-bottom: 24px;
  max-width: 8ch;
  text-transform: uppercase;
}

.recommended__special-desc {
  font-size: 15px;
  line-height: 25px;
  color: white;
  opacity: 0.5;
  margin-bottom: 24px;
  max-width: 340px;
}

.recommended__item:nth-child(2) {
  position: relative;
}

.recommended__item-overlay {
  position: absolute;
  inset: 0;
  padding-top: 101px;
  padding-left: 24px;
}

.recommended__item-imagebg {
  width: 100%;
  border-radius: 8px;
}

.recommended__item-title {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 32px;
  text-transform: uppercase;
}

.recommended__item-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
}

.recommended__item-content {
  border-radius: 8px;
  background-color: #f1f1f1;
  padding-top: 41px;
  padding-bottom: 41px;
  padding-left: 24px;
}

@media screen and (min-width: 768px) {
  #recommended {
    padding: 0 40px;
    margin-top: 96px;
    gap: 32px;
  }

  .recommended__special-image {
    margin-bottom: 64px;
  }

  .recommended__special-title {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }

  .recommended__special-desc {
    margin-bottom: 40px;
  }

  .recommended__item-overlay {
    padding-left: 62px;
  }

  .recommended__item:last-child {
    display: grid;
    gap: 11px;
    grid-template-columns: 1fr 1fr;
  }

  .recommended__item-image {
    object-fit: cover;
    margin-bottom: unset;
  }

  .recommended__item-content {
    padding-left: 41px;
    padding-top: 101px;
  }
}

@media screen and (min-width: 1440px) {
  #recommended {
    margin-top: 168px;
    padding-left: 165px;
    padding-right: 165px;
  }

  .recommended__special {
    flex-direction: row;
    text-align: left;
    padding-left: 130px;
    gap: 140px;
    height: 560px;
    overflow: hidden;
  }

  .recommended__special-image {
    max-height: 493px;
    position: relative;
    top: 100px;
  }

  .recommended__special-content {
    align-items: flex-start;
  }

  .recommended__item-overlay {
    padding-left: 95px;
  }

  .recommended__item:last-child {
    gap: 30px;
  }

  .recommended__item-content {
    padding-left: 95px;
  }
}
</style>
