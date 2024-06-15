import * as graphql from "@nestjs/graphql";
import { SocialPostResolverBase } from "./base/socialPost.resolver.base";
import { SocialPost } from "./base/SocialPost";
import { SocialPostService } from "./socialPost.service";

@graphql.Resolver(() => SocialPost)
export class SocialPostResolver extends SocialPostResolverBase {
  constructor(protected readonly service: SocialPostService) {
    super(service);
  }
}
