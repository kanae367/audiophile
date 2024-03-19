<script setup lang="ts">
import AudiophileIcon from './icons/AudiophileIcon.vue'
import facebook from './icons/facebook.svg'
import twitter from './icons/twitter.svg'
import instagram from './icons/instagram.svg'
const pageLinks = ['Home', 'Headphones', 'Speakers', 'Earphones']
const socialLinks = [
  { name: 'Facebook', link: 'https://facebook.com', icon: facebook },
  { name: 'Twitter', link: 'https://twitter.com', icon: twitter },
  { name: 'Instagram', link: 'https://instagram.com', icon: instagram }
]
</script>

<template>
  <footer class="footer">
    <AudiophileIcon />
    <p class="footer__description">
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
      lovers and sound specialists who are devoted to helping you get the most out of personal
      audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <ul class="footer__link-list">
      <li class="footer__link" v-for="item in pageLinks" :key="item">
        <a href="#" class="link">{{ item }}</a>
      </li>
    </ul>
    <ul class="socials">
      <li class="socials__icon" v-for="item in socialLinks" :key="item.name">
        <a :href="item.link" class="socials__icon-link"
          ><img :src="item.icon" :alt="item.name"
        /></a>
      </li>
    </ul>
    <p class="footer__copyright">Copyright 2021. All Rights Reserved</p>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 38px;
  padding-top: 52px;
  background-color: #101010;
  display: grid;
  grid-template-areas: 'icon' 'nav' 'text' 'copyright' 'socials';
  text-align: center;
  gap: 48px;
}

svg {
  grid-area: icon;
  margin: 0 auto;
}

.footer__link-list {
  grid-area: nav;
}

.footer__link:not(:first-child) {
  margin-top: 16px;
}

.link {
  font-size: 13px;
  font-weight: bold;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 2px;
}

.footer__description {
  grid-area: text;
  font-weight: medium;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
}

.socials {
  grid-area: socials;
  display: flex;
  gap: 16px;
  margin: 0 auto;
  align-items: center;
}

.footer__copyright {
  grid-area: copyright;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
}
</style>
