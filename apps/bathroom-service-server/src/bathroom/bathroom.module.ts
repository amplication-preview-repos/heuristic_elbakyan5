import { Module } from "@nestjs/common";
import { BathroomModuleBase } from "./base/bathroom.module.base";
import { BathroomService } from "./bathroom.service";
import { BathroomController } from "./bathroom.controller";
import { BathroomResolver } from "./bathroom.resolver";

@Module({
  imports: [BathroomModuleBase],
  controllers: [BathroomController],
  providers: [BathroomService, BathroomResolver],
  exports: [BathroomService],
})
export class BathroomModule {}
