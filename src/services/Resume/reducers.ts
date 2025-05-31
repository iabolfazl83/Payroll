import { setLoadingFalse } from "@/utils/general.ts";

export const authenticateReducer = {
  handleLoginByUserName(state: any, action: any) {
    setLoadingFalse(state);
  },
};
