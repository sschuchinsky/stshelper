import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    properties: [
      { name: 'HP', color: 'error', counter: 0 },
      { name: 'MP', color: 'info', counter: 0 },
      { name: 'Block', image: 'block.png', counter: 0 },
      { name: 'strength', image: 'strength.png', counter: 0 },
      { name: 'weak', image: 'weak.png', counter: 0 },
      { name: 'vulnerable', image: 'vulnerable.png', counter: 0 },
      { name: 'gold', image: 'gold.png', counter: 0 },
      { name: 'miracle', image: 'miracle.png', counter: 0 },
      { name: 'shiv', image: 'shiv.png', counter: 0 },
    ]
  }),

  actions: {
    clearAll() {
      this.$reset()
    }
  },

  persist: true
})
