import { Module } from "@nestjs/common";
import { FeedModuleBase } from "./base/feed.module.base";
import { FeedService } from "./feed.service";
import { FeedController } from "./feed.controller";
import { FeedResolver } from "./feed.resolver";

@Module({
  imports: [FeedModuleBase],
  controllers: [FeedController],
  providers: [FeedService, FeedResolver],
  exports: [FeedService],
})
export class FeedModule {}
