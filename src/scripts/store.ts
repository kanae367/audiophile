import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
interface CartProduct {
  id: number
  slug: string
  price: number
  name: string
  amount: number
}

// export const useCart = defineStore('cart', {
//   state: (): {
//     products: CartProduct[]
//     isVisible: boolean
//   } => ({
//     products: [],
//     isVisible: false
//   }),
//   actions: {
//     changeVisibility() {
//       this.isVisible = !this.isVisible
//     },
//     add(item: CartProduct) {
//       const product = this.products.find((prev) => prev.slug === item.slug)
//       product ? (product.amount += item.amount) : this.products.push(item)
//     },
//     remove(slug: string) {
//       this.products.filter((item) => item.slug === slug)
//     },
//     clearAll() {
//       this.products = []
//     }
//   }
// })

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

  const remove = (slug: string) => {
    console.log(products, slug)
  }

  const clearAll = () => {
    products.length = 0
  }

  return {
    products,
    isVisible,
    changeVisibility,
    add,
    remove,
    clearAll
  }
})
