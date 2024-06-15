import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedServiceBase } from "./base/feed.service.base";

@Injectable()
export class FeedService extends FeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
