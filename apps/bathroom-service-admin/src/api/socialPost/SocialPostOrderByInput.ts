import { SortOrder } from "../../util/SortOrder";

export type SocialPostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  datePosted?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
