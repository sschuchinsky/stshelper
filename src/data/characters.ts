import ironclad from "@/assets/ironclad.png"
import ironcladEnergy from "@/assets/ironclad-energy.png"
import silent from "@/assets/silent.png"
import silentEnergy from "@/assets/silent-energy.png"
import defect from "@/assets/defect.png"
import defectEnergy from "@/assets/defect-energy.png"
import watcher from "@/assets/watcher.png"
import watcherEnergy from "@/assets/watcher-energy.png"
import type { Attribute, Character } from "@/types/app.types"
import block from '@/assets/block.png'
import strength from '@/assets/strength.png'
import weak from '@/assets/weak.png'
import vulnerable from '@/assets/vulnerable.png'
import gold from '@/assets/gold.png'
import miracle from '@/assets/miracle.png'
import shiv from '@/assets/shiv.png'
import enemy from '@/assets/enemy.png'


export const commonsProperties: Attribute[] = [
  { name: 'enemy', image: enemy, counter: 0 },
  { name: 'gold', image: gold, counter: 0 },
  { name: 'energy', counter: 0 },
  { name: 'block', image: block, counter: 0 },

  { name: 'strength', image: strength, counter: 0, max: 8 },
  { name: 'weak', image: weak, counter: 0, max: 3 },
  { name: 'vulnerable', image: vulnerable, counter: 0, max: 3 },
]

export const characters: Character[] = [
  {
    name: 'ironclad',
    image: ironclad,
    color: 'red',
    energyImage: ironcladEnergy,
    customAttributes: [
      { name: 'hp', icon: 'mdi-heart', color: 'red', counter: 0, max: 11 }
    ]
  },
  {
    name: 'silent',
    image: silent,
    color: 'green',
    energyImage: silentEnergy,
    customAttributes: [
      { name: 'hp', icon: 'mdi-heart', color: 'red', counter: 0, max: 9 },
      { name: 'shiv', image: shiv, counter: 0, max: 5 }
    ]
  },
  {
    name: 'defect',
    image: defect,
    color: 'blue',
    energyImage: defectEnergy,
    customAttributes: [
      { name: 'hp', icon: 'mdi-heart', color: 'red', counter: 0, max: 9 },
    ]
  },
  {
    name: 'watcher',
    image: watcher,
    color: 'purple',
    energyImage: watcherEnergy,
    customAttributes: [
      { name: 'hp', icon: 'mdi-heart', color: 'red', counter: 0, max: 9 },
      { name: 'miracle', image: miracle, counter: 0, max: 5 }
    ]
  }
]

