import { SortOrder } from "../../util/SortOrder";

export type FeedOrderByInput = {
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  post?: SortOrder;
  updatedAt?: SortOrder;
};
