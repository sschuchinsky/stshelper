import ironclad from "@/assets/ironclad.png"
import silent from "@/assets/silent.png"
import defect from "@/assets/defect.png"
import watcher from "@/assets/watcher.png"
import type { Character } from "@/types/app.types"

export const characters: Character[] = [
  { name: 'ironclad', image: ironclad, color: 'red' },
  { name: 'silent', image: silent, color: 'green' },
  { name: 'defect', image: defect, color: 'blue' },
  { name: 'watcher', image: watcher, color: 'violet' }
]
