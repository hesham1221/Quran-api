import { ArgsType, Field, InputType } from "@nestjs/graphql";
import {IsOptional, IsString } from "class-validator";
import { Int } from "type-graphql";

@InputType()
export class AyahFilter {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  searchKey?: string;

  @Field(() => Int ,{ nullable: true })
  @IsOptional()
  juz? : number

  @Field(() => Int ,{ nullable: true })
  @IsOptional()
  manzil? : number

  @Field(() => Int ,{ nullable: true })
  @IsOptional()
  page? : number

  @Field(() => Int ,{ nullable: true })
  @IsOptional()
  ruku? : number

  @Field(() => Int ,{ nullable: true })
  @IsOptional()
  hizbQuarter? : number
}

@ArgsType()
export class AyahFilterInput {
  @Field({ nullable: true })
  filter?: AyahFilter;
}