import { FeedWhereInput } from "./FeedWhereInput";
import { FeedOrderByInput } from "./FeedOrderByInput";

export type FeedFindManyArgs = {
  where?: FeedWhereInput;
  orderBy?: Array<FeedOrderByInput>;
  skip?: number;
  take?: number;
};
