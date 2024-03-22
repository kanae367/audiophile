<template>
  <section id="outro">
    <img
      class="outro__image"
      :srcset="'/assets/shared/mobile/image-best-gear.jpg 767w, /assets/shared/tablet/image-best-gear.jpg 1439w, /assets/shared/desktop/image-best-gear.jpg 1440w'"
      alt="best gear"
    />
    <div class="outro__content">
      <h3 class="outro__title">Bringing you the <span class="accent">best</span> audio gear</h3>
      <p class="outro__text">
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </div>
  </section>
</template>

<style scoped>
#outro {
  padding: 0 24px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
}

.outro__image {
  border-radius: 8px;
}

.outro__title {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 32px;
}

.outro__text {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  opacity: 0.5;
  color: black;
}

.accent {
  color: #d87d4a;
}

@media screen and (min-width: 768px) {
  #outro {
    padding: 0 40px;
    gap: 63px;
  }

  .outro__title {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.5px;
  }

  .outro__content {
    max-width: 573px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1440px) {
  #outro {
    flex-direction: row-reverse;
    text-align: left;
    align-items: center;
    padding: 0 165px;
    gap: 125px;
  }

  .outro__image {
    max-width: 540px;
  }
}
</style>
