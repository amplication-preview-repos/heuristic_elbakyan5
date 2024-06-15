import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BathroomServiceBase } from "./base/bathroom.service.base";

@Injectable()
export class BathroomService extends BathroomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
