<script setup lang="ts">
import AudiophileIcon from './icons/AudiophileIcon.vue'
import facebook from './icons/facebook.svg'
import twitter from './icons/twitter.svg'
import instagram from './icons/instagram.svg'
import NavigationBar from './NavigationBar.vue'
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

    <div class="footer__nav">
      <NavigationBar />
    </div>

    <ul class="socials">
      <li class="socials__icon" v-for="item in socialLinks" :key="item.name">
        <a :href="item.link" class="socials__icon-link"
          ><img :src="item.icon" :alt="item.name"
        /></a>
      </li>
    </ul>
    <p class="footer__copyright">Copyright 2024. All Rights Reserved</p>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 120px;
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

.footer__nav {
  grid: nav;
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
  list-style: none;
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

@media screen and (min-width: 768px) {
  .footer {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 46px;
    padding-top: 60px;
    grid-template-areas: 'icon icon' 'nav nav' 'text text' 'copyright socials';
    gap: 32px;
    text-align: left;
    margin-top: 96px;
  }

  .footer__description {
    margin-bottom: calc(80px - 32px);
  }

  .socials {
    width: 100%;
    justify-content: flex-end;
  }

  svg {
    margin-left: 0;
  }
}

@media screen and (min-width: 1440px) {
  .footer {
    padding-left: 165px;
    padding-right: 165px;
    padding-bottom: 48px;
    padding-top: 75px;
    grid-template-areas: 'icon nav' 'text socials' 'copyright copyright';
    gap: 36px;
    margin-top: 200px;
  }

  .footer__description {
    width: 540px;
    margin-bottom: 20px;
  }

  .socials {
    align-items: flex-end;
  }
}
</style>
