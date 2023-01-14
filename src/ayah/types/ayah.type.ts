import { Field, ObjectType } from "@nestjs/graphql";
import { Int } from "type-graphql";

export interface AyahType {
  enTranslation: string;
  text: string;
  numberInSurah: number;
  number: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: Sajda | boolean;
  surahId?:string;
}


@ObjectType()
export class Sajda{
  @Field(() => Int)
  id : number;

  @Field(() => Boolean)
  recommended : boolean;

  @Field(() => Boolean)
  obligatory : boolean;
}