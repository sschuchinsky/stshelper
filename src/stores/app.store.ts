import { defineStore } from 'pinia'
import type { AppState, Character } from '@/types/app.types'
import { characters, commonsProperties, commonsPropertiesBars } from '@/data/characters'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    characterSelected: undefined,
    propertiesBars: [],
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
      this.properties = [...commonsProperties, ...c.customAttributes]
      this.propertiesBars = [c.hp, ...commonsPropertiesBars]
    },
    setCounterBarProperty(name: string, counter: number) {
      const propertySearchedIndex = this.propertiesBars.findIndex(p => p.name === name)

      if (propertySearchedIndex != -1 && this.propertiesBars[propertySearchedIndex]) {
        this.propertiesBars[propertySearchedIndex].counter = counter
      }
    }
  },
  persist: true
})

