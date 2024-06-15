import { BathroomWhereInput } from "./BathroomWhereInput";
import { BathroomOrderByInput } from "./BathroomOrderByInput";

export type BathroomFindManyArgs = {
  where?: BathroomWhereInput;
  orderBy?: Array<BathroomOrderByInput>;
  skip?: number;
  take?: number;
};
