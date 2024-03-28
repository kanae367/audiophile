import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
interface CartProduct {
  id: number
  slug: string
  price: number
  name: string
  amount: number
}

export const useCart = defineStore('cart', () => {
  const products: CartProduct[] = reactive([])
  const isVisible = ref(false)

  const changeVisibility = () => {
    isVisible.value = !isVisible.value
  }

  const add = (item: CartProduct) => {
    const product = products.find((prev) => prev.slug === item.slug)
    product ? (product.amount += item.amount) : products.push(item)
  }

  const clearAll = () => {
    products.length = 0
  }

  const changeAmount = (product: CartProduct, increment: boolean) => {
    const item = products.find((item) => item.slug === product.slug)

    if (increment) {
      item!.amount++
    } else {
      item!.amount--
      const index = products.findIndex((item) => item.amount === 0)
      index != -1 && products.splice(index, 1)
    }
  }

  return {
    products,
    isVisible,
    changeVisibility,
    add,
    changeAmount,
    clearAll
  }
})
