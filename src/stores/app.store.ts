import { defineStore } from 'pinia'
import block from '@/assets/block.png'
import strength from '@/assets/strength.png'
import weak from '@/assets/weak.png'
import vulnerable from '@/assets/vulnerable.png'
import gold from '@/assets/gold.png'
import miracle from '@/assets/miracle.png'
import shiv from '@/assets/shiv.png'
import type { AppState, Character } from '@/types/app.types'
import { characters, defaultCharacter } from '@/data/characters'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    characterSelected: defaultCharacter,
    properties: [
      { name: 'HP', color: 'error', counter: 0 },
      { name: 'energy', image: defaultCharacter.energyImage, counter: 0 },
      { name: 'Block', image: block, counter: 0 },
      { name: 'gold', image: gold, counter: 0 },

      { name: 'strength', image: strength, counter: 0, max: 8 },
      { name: 'weak', image: weak, counter: 0, max: 3 },
      { name: 'vulnerable', image: vulnerable, counter: 0, max: 3 },
    ],
    miracle: { name: 'miracle', image: miracle, counter: 0, max: 5 },
    shiv: { name: 'shiv', image: shiv, counter: 0, max: 5 }
  }),

  actions: {
    clearAll() {
      this.$reset()
    },
    selectCharacter(c: Character) {
      this.characterSelected = c
      if (this.properties[1]) { this.properties[1].image = c.energyImage }
    }
  },

  persist: true
})
