import ironclad from "@/assets/ironclad.png"
import ironcladEnergy from "@/assets/ironclad-energy.png"
import silent from "@/assets/silent.png"
import silentEnergy from "@/assets/silent-energy.png"
import defect from "@/assets/defect.png"
import defectEnergy from "@/assets/defect-energy.png"
import watcher from "@/assets/watcher.png"
import watcherEnergy from "@/assets/watcher-energy.png"
import type { Character } from "@/types/app.types"

export const characters: Character[] = [
  {
    name: 'ironclad', image: ironclad, color: 'red', energyImage: ironcladEnergy },
  { name: 'silent', image: silent, color: 'green', energyImage: silentEnergy },
  { name: 'defect', image: defect, color: 'blue', energyImage: defectEnergy },
  { name: 'watcher', image: watcher, color: 'purple', energyImage: watcherEnergy }
]
