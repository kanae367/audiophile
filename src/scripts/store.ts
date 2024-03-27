import { defineStore } from 'pinia'

export const useCart = defineStore('cart', {
  state: () => {
    return {
      isVisible: false
    }
  },
  actions: {
    changeVisibility() {
      this.isVisible = !this.isVisible
    }
  }
})
