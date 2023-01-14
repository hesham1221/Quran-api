import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { RevelationTypeEnum } from "../surah.enum";

@InputType()
export class SurahFilter {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  searchKey?: string;

  @Field(() => RevelationTypeEnum,{ nullable: true })
  @IsEnum(RevelationTypeEnum)
  @IsOptional()
  revelationType?: RevelationTypeEnum;
}

@ArgsType()
export class SurahFilterInput {
  @Field({ nullable: true })
  filter?: SurahFilter;
}