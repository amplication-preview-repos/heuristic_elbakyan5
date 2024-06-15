import * as graphql from "@nestjs/graphql";
import { FeedResolverBase } from "./base/feed.resolver.base";
import { Feed } from "./base/Feed";
import { FeedService } from "./feed.service";

@graphql.Resolver(() => Feed)
export class FeedResolver extends FeedResolverBase {
  constructor(protected readonly service: FeedService) {
    super(service);
  }
}
