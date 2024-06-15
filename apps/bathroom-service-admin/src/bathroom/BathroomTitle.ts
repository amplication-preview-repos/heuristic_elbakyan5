import { Bathroom as TBathroom } from "../api/bathroom/Bathroom";

export const BATHROOM_TITLE_FIELD = "name";

export const BathroomTitle = (record: TBathroom): string => {
  return record.name?.toString() || String(record.id);
};
