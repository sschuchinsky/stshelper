export interface AppState {
  characterSelected: CharacterName
  properties: Attribute[]
  miracle: Attribute
  shiv: Attribute
}

export interface Attribute {
  name: string
  color?: string
  image?: string
  counter: number
  max?: number
}

type CharacterName = 'ironclad' | 'silent' | 'defect' | 'watcher'

export interface Character {
  name: CharacterName
  image: string
  color: string
  energyImage: string
}
