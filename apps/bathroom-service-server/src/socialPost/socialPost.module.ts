import { Module } from "@nestjs/common";
import { SocialPostModuleBase } from "./base/socialPost.module.base";
import { SocialPostService } from "./socialPost.service";
import { SocialPostController } from "./socialPost.controller";
import { SocialPostResolver } from "./socialPost.resolver";

@Module({
  imports: [SocialPostModuleBase],
  controllers: [SocialPostController],
  providers: [SocialPostService, SocialPostResolver],
  exports: [SocialPostService],
})
export class SocialPostModule {}
