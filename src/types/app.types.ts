export interface AppState {
  characterSelected?: Character
  properties: Attribute[]
}

export interface Attribute {
  name: string
  color?: string
  image?: string
  counter: number
  max?: number
  icon?: string
}

type CharacterName = 'ironclad' | 'silent' | 'defect' | 'watcher'

export interface Character {
  name: CharacterName
  image: string
  color: string
  energyImage: string
  customAttributes: Attribute[]
}
