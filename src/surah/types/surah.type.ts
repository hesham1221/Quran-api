import { AyahType } from "src/ayah/types/ayah.type"

export interface SurahType{
  name: string
  number: number
  enName: string
  enTranslation: string
  revelationType: string
  ayahs? : AyahType[]
}