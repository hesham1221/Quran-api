import { AyahType } from "src/ayah/types/ayah.type"
import { RevelationTypeEnum } from "../surah.enum"

export interface SurahType{
  name: string
  number: number
  enName: string
  enTranslation: string
  revelationType: RevelationTypeEnum
  ayahs? : AyahType[]
}