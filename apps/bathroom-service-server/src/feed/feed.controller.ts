import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeedService } from "./feed.service";
import { FeedControllerBase } from "./base/feed.controller.base";

@swagger.ApiTags("feeds")
@common.Controller("feeds")
export class FeedController extends FeedControllerBase {
  constructor(protected readonly service: FeedService) {
    super(service);
  }
}
