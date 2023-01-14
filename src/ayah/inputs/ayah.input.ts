import { Field, InputType } from "@nestjs/graphql";
import { Int } from "type-graphql";

@InputType()
export class AyahInput{
    @Field(() => String , {nullable : true})
    surahId : string

    @Field(() => Int , {nullable : true})
    surahNumber : number
}