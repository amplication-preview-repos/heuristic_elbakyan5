import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialPostServiceBase } from "./base/socialPost.service.base";

@Injectable()
export class SocialPostService extends SocialPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
