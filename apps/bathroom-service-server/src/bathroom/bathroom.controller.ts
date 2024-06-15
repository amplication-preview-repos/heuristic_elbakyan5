import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BathroomService } from "./bathroom.service";
import { BathroomControllerBase } from "./base/bathroom.controller.base";

@swagger.ApiTags("bathrooms")
@common.Controller("bathrooms")
export class BathroomController extends BathroomControllerBase {
  constructor(protected readonly service: BathroomService) {
    super(service);
  }
}
