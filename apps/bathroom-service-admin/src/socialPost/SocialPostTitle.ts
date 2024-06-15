import { SocialPost as TSocialPost } from "../api/socialPost/SocialPost";

export const SOCIALPOST_TITLE_FIELD = "author";

export const SocialPostTitle = (record: TSocialPost): string => {
  return record.author?.toString() || String(record.id);
};
