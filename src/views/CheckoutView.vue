<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CheckoutIcon from '@/components/icons/CheckoutIcon.vue'
import OrderPopup from '@/components/OrderPopup.vue'
import { useCart } from '@/scripts/store'
import { ref } from 'vue'
import { form } from '../scripts/formSchema'
import { useForm } from 'vee-validate'

function required(value: any) {
  return value ? true : 'This field is required'
}
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: {
    name: required,
    phone: required,
    email: required,
    address: required,
    zip: required,
    city: required,
    country: required,
    pin: required,
    enum: required
  }
})

const [name, nameProps] = defineField('name')
const [phone, phoneProps] = defineField('phone')
const [email, emailProps] = defineField('email')

const cart = useCart()
const products = cart.products

const result: any = {
  name: '',
  phone: '',
  email: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  pin: '',
  'e-num': ''
}

const isOrderPopupOpen = ref(false)
const paymentMethod = ref('e-money')

const onSubmit = handleSubmit((values) => {
  isOrderPopupOpen.value = true
  console.log(values)
})
</script>
<template>
  <RouterLink class="return-btn" to="/">Go Back</RouterLink>
  <OrderPopup v-if="isOrderPopupOpen && products.length" />
  <div class="form-container">
    <form id="checkout" class="form" name="checkout" @submit="onSubmit">
      <h1 class="form__title">Checkout</h1>
      <div class="billing-container">
        <h2 class="title">Billing Details</h2>
        <div class="items">
          <div class="item">
            <label for="name"
              >Name <span class="error">{{ errors.name }}</span></label
            >
            <input
              class="input"
              v-model="name"
              v-bind="nameProps"
              id="name"
              placeholder="Alexei Ward"
              required
            />
          </div>
          <div class="item">
            <label for="email"
              >Email Address <span class="error">{{ errors.email }}</span></label
            >
            <input
              class="input"
              v-model="email"
              v-bind="emailProps"
              id="email"
              placeholder="alexei@mail.com"
              required
            />
          </div>
          <div class="item">
            <label for="phone"
              >Phone Number <span class="error">{{ errors.phone }}</span></label
            >
            <input
              class="input"
              v-model="phone"
              v-bind="phoneProps"
              id="phone"
              placeholder="+1 (202) 555-0136"
              required
            />
          </div>
        </div>
      </div>
      <div class="shipping-container">
        <h2 class="title">Shipping Info</h2>
        <div class="items">
          <div class="item" v-for="item in form.shippingInfo" :key="item.name">
            <div class="item__top">
              <label :for="item.name">{{ item.label }}</label>
              <span class="error"></span>
            </div>
            <input
              class="input"
              :type="item.type"
              :id="item.name"
              :placeholder="item.placeholder"
              v-model="result[item.name]"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <h2 class="title">Payment Details</h2>
        <div class="item">
          <div class="payment-container">
            <label>Payment Method</label>
            <div>
              <label v-for="item in form.paymentDetails" :key="item.label" class="payment-item">
                <input
                  :checked="form.paymentDetails[0] === item"
                  class="payment-radio"
                  :value="item.value"
                  :type="item.type"
                  v-model="paymentMethod"
                  :name="item.name"
                  required
                />
                {{ item.label }}
              </label>
            </div>
          </div>
          <div class="e-container" v-if="paymentMethod === 'e-money'">
            <div class="item" v-for="item in form.paymentDetails[0].data" :key="item.name">
              <label :for="item.name">{{ item.label }}</label>
              <input
                class="input"
                :type="item.type"
                :id="item.name"
                :placeholder="item.placeholder"
                v-model="result[item.name]"
                required
              />
            </div>
          </div>
          <div class="cash-bottom" v-else>
            <CheckoutIcon class="checkout-icon" />
            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
            arrives at your residence. Just make sure your address is correct so that your order
            will not be cancelled.
          </div>
        </div>
      </div>
    </form>
    <div class="summary">
      <h2 class="summary__title">Summary</h2>
      <ul class="summary__list">
        <li class="summary__list-item" v-for="item in products" :key="item.slug">
          <img
            class="summary__item-image"
            :src="`/assets/cart/image-${item.slug}.jpg`"
            :alt="item.name"
          />
          <div class="summary__item-desc">
            <div class="summary__item-title">{{ item.name.split(' ')[0] }}</div>
            <div class="summary__item-price">$ {{ item.price }}</div>
          </div>
          <div class="summary__item-amount">x{{ item.amount }}</div>
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
      <button
        form="checkout"
        type="submit"
        class="button button_wide"
        :disabled="products.length ? false : true"
      >
        Continue {{ paymentMethod === 'e-money' ? '& Pay' : '' }}
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
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

.summary__list-item {
  display: flex;
}

.summary__item-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
}

.summary__item-desc {
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
}

.summary__item-amount {
  margin-left: auto;
  margin-top: 7px;
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
}

.summary__item-price {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}

.summary .accent {
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

.cash-bottom {
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
}

.e-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media screen and (min-width: 768px) {
  .e-container {
    flex-direction: row;
  }

  .cash-bottom {
    flex-direction: row;
    text-align: left;
    gap: 32px;
  }

  .checkout-icon {
    flex-shrink: 0;
  }
}
</style>
