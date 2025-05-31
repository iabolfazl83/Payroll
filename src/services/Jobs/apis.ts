import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiRequest } from "@/utils/general.ts";
import { ApiEndpoints } from "@/utils/endpoints.ts";

export const handleGetJobOffers = createAsyncThunk(
  "job-offers/getList",
  async () => {
    return await apiRequest(ApiEndpoints.jobOffersGetList, "GET").then(
      (response: any) => {
        console.log(response);
      },
    );
  },
);
