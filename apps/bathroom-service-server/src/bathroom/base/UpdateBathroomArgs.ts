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
import { BathroomWhereUniqueInput } from "./BathroomWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BathroomUpdateInput } from "./BathroomUpdateInput";

@ArgsType()
class UpdateBathroomArgs {
  @ApiProperty({
    required: true,
    type: () => BathroomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BathroomWhereUniqueInput)
  @Field(() => BathroomWhereUniqueInput, { nullable: false })
  where!: BathroomWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BathroomUpdateInput,
  })
  @ValidateNested()
  @Type(() => BathroomUpdateInput)
  @Field(() => BathroomUpdateInput, { nullable: false })
  data!: BathroomUpdateInput;
}

export { UpdateBathroomArgs as UpdateBathroomArgs };