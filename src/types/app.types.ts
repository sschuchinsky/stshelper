export interface AppState {
  properties: Attribute[]
}

export interface Attribute {
  name: string
  color?: string
  image?: string
  counter: number
  max?: number
}
