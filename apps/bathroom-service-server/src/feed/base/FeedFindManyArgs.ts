/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedWhereInput } from "./FeedWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FeedOrderByInput } from "./FeedOrderByInput";

@ArgsType()
class FeedFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FeedWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FeedWhereInput, { nullable: true })
  @Type(() => FeedWhereInput)
  where?: FeedWhereInput;

  @ApiProperty({
    required: false,
    type: [FeedOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FeedOrderByInput], { nullable: true })
  @Type(() => FeedOrderByInput)
  orderBy?: Array<FeedOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FeedFindManyArgs as FeedFindManyArgs };
