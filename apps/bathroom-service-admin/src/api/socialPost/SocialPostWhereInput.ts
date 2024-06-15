import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SocialPostWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  datePosted?: DateTimeNullableFilter;
  id?: StringFilter;
};
