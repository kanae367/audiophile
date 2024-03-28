<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCart } from '@/scripts/store'
const cart = useCart()
const products = cart.products
</script>
<template>
  <RouterLink class="return-btn" to="/">Go Back</RouterLink>
  <div class="form-container">
    <form class="form" name="checkout">
      <h1 class="form__title">Checkout</h1>
      <div class="billing-container">
        <h2 class="title">Billing Details</h2>
        <div class="items">
          <div class="item">
            <label for="name">Name</label>
            <input class="input" type="text" id="name" placeholder="Alexei Ward" />
          </div>
          <div class="item">
            <label for="email">Email Address</label>
            <input class="input" type="text" id="email" placeholder="alexei@mail.com" />
          </div>
          <div class="item">
            <label for="phone">Phone Number</label>
            <input class="input" type="text" id="phone" placeholder="+1202-555-0136" />
          </div>
        </div>
      </div>
      <div class="shipping-container">
        <h2 class="title">Shipping Info</h2>
        <div class="items">
          <div class="item">
            <label for="address">Your Address</label>
            <input class="input" type="text" id="address" placeholder="1137 Williams Avenue" />
          </div>
          <div class="item">
            <label for="zip">ZIP Code</label>
            <input class="input" type="text" id="zip" placeholder="10001" />
          </div>
          <div class="item">
            <label for="city">City</label>
            <input class="input" type="text" id="city" placeholder="New York" />
          </div>
          <div class="item">
            <label for="country">Country</label>
            <input class="input" type="text" id="country" placeholder="United States" />
          </div>
        </div>
      </div>
      <div>
        <h2 class="title">Payment Details</h2>
        <div class="item">
          <div class="payment-container">
            <label>Payment Method</label>
            <div>
              <label class="payment-item">
                <input checked class="payment-radio" type="radio" name="payment" />
                e-Money
              </label>
              <label class="payment-item">
                <input class="payment-radio" type="radio" name="payment" />
                Cash on Delivery
              </label>
            </div>
            <div class="item">
              <label for="e-number">e-Money Number</label>
              <input class="input" type="text" id="e-number" placeholder="238521993" />
            </div>
            <div class="item">
              <label for="pin">e-Money PIN</label>
              <input class="input" type="text" id="pin" placeholder="6891" />
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="summary">
      <h2 class="summary__title">Summary</h2>
      <ul class="summary__list">
        <li class="summary__list-item" v-for="item in products" :key="item.slug">
          <img :src="`/assets/cart/image-${item.slug}.jpg`" :alt="item.name" />
          <div class="summary__item-desc"></div>
        </li>
      </ul>
      <ul class="summary__result">
        <li class="summary__result-item">
          Total
          <span class="accent">$ {{ products.reduce((acc, next) => acc + next.price, 0) }}</span>
        </li>
        <li class="summary__result-item">
          Shipping
          <span class="accent">$ 50</span>
        </li>
        <li class="summary__result-item">
          Vat (included)
          <span class="accent"
            >$ {{ Math.floor(products.reduce((acc, next) => acc + next.price, 0) * 0.2) }}</span
          >
        </li>
      </ul>

      <div class="summary__result-item">
        Grand Total
        <span class="accent_brown accent"
          >$ {{ products.reduce((acc, next) => acc + next.price, 0) + 50 }}</span
        >
      </div>
      <button form="checkout" class="button button_wide" :disabled="products.length ? false : true">
        Continue & Pay
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/shared.css';
.form {
  margin: 0 24px;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
}

.form__title {
  font-size: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
}

.title {
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: #d87d4a;
  margin-bottom: 16px;
  margin-top: 32px;
}

label {
  display: block;
  font-size: 12px;
  letter-spacing: -0.2px;
  font-weight: bold;
  margin-bottom: 9px;
}

.input {
  display: block;
  padding: 19px 24px;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: -0.25px;
  font-weight: bold;
  border: 1px solid #cfcfcf;
  width: 100%;
}

.input::placeholder {
  opacity: 0.4;
}

.payment-item {
  padding: 18px 16px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: -0.25px;
  font-weight: bold;
  margin-bottom: 16px;
}

.payment-item:last-child {
  margin-bottom: 32px;
}

.payment-radio {
  margin-right: 16px;
}

.summary {
  margin: 0 24px;
  margin-top: 32px;
  background-color: white;
  border-radius: 8px;
  padding: 32px 24px;
}

.summary__title {
  font-size: 18px;
  letter-spacing: 1.3px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.summary__list {
  list-style: none;
}

.summary__result {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin-bottom: 24px;
}

.summary__result-item {
  line-height: 25px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
}

.accent {
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.accent_brown {
  color: #d87d4a;
  margin-bottom: 32px;
}

.button_wide {
  width: 100%;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.item {
  flex-grow: 1;
}

.billing-container .input {
  max-width: 309px;
}

.payment-container .item:last-child {
  margin-top: 24px;
}

@media screen and (min-width: 768px) {
  .form {
    margin: 0 40px;
    padding: 30px 27px;
  }

  .summary {
    margin-left: 40px;
    margin-right: 40px;
  }

  .form__title {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.1px;
  }

  .title {
    margin-top: 40px;
  }

  .items {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 24px;
  }

  .shipping-container .items {
    display: grid;
    grid-template-areas: 'first first' 'second third' 'fourth empty';
  }

  .shipping-container .item:first-child {
    grid-area: first;
  }

  .shipping-container .item:nth-child(2) {
    grid-area: second;
  }

  .shipping-container .item:nth-child(3) {
    grid-area: third;
  }

  .shipping-container .item:last-child {
    grid-area: fourth;
  }

  .payment-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }

  .payment-item:last-child {
    margin-bottom: 24px;
  }

  .payment-container .item:last-child {
    margin-top: 0;
  }
}

@media screen and (min-width: 1440px) {
  .form {
    margin: 0;
    width: 730px;
  }

  .summary {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    width: 350px;
  }

  .form-container {
    display: flex;
    gap: 30px;
    margin: 0 165px;
    align-items: flex-start;
  }

  .billing-container .input {
    max-width: 330px;
  }
}
</style>
