import { Feed as TFeed } from "../api/feed/Feed";

export const FEED_TITLE_FIELD = "post";

export const FeedTitle = (record: TFeed): string => {
  return record.post?.toString() || String(record.id);
};
