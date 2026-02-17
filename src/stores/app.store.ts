import { defineStore } from 'pinia'
import type { AppState, Character } from '@/types/app.types'
import { characters, commonsProperties } from '@/data/characters'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    characterSelected: undefined,
    properties: []
  }),

  actions: {
    init() {
      if (!this.characterSelected && characters[0]) {
        this.selectCharacter(characters[0])
      }
    },
    clearAll() {
      this.$reset()
      this.init()
    },
    selectCharacter(c: Character) {
      this.characterSelected = c
      this.properties = commonsProperties

      const energyIndex = this.properties.findIndex(v => v.name === 'energy')
      if (energyIndex != -1 && this.properties[energyIndex]) {
        this.properties[energyIndex].image = c.energyImage
      }

      this.properties = [...commonsProperties, ...c.customAttributes]
    }
  },
  persist: true
})

