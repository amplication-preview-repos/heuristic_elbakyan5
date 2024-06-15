import * as graphql from "@nestjs/graphql";
import { BathroomResolverBase } from "./base/bathroom.resolver.base";
import { Bathroom } from "./base/Bathroom";
import { BathroomService } from "./bathroom.service";

@graphql.Resolver(() => Bathroom)
export class BathroomResolver extends BathroomResolverBase {
  constructor(protected readonly service: BathroomService) {
    super(service);
  }
}
