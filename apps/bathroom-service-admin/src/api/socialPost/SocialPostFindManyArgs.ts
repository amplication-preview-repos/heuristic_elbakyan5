import { SocialPostWhereInput } from "./SocialPostWhereInput";
import { SocialPostOrderByInput } from "./SocialPostOrderByInput";

export type SocialPostFindManyArgs = {
  where?: SocialPostWhereInput;
  orderBy?: Array<SocialPostOrderByInput>;
  skip?: number;
  take?: number;
};
