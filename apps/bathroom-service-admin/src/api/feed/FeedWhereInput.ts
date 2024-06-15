import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeedWhereInput = {
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  post?: StringNullableFilter;
};
