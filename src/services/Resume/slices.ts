import { createSlice } from "@reduxjs/toolkit";

import { handleLoginByUserNameApi } from "./apis.ts";
import { errorMessages } from "./error.ts";

import { InitialStateAuthenticate } from "@/types";
import { addAsyncCase } from "@/utils/general.ts";
import { authenticateReducer } from "@/services/HRBOX/Authenticate/reducers.ts";

const AuthenticateServiceSlices = createSlice({
  name: "auth",
  initialState: InitialStateAuthenticate,
  reducers: {},
  extraReducers: (builder) => {
    addAsyncCase(
      builder,
      handleLoginByUserNameApi,
      authenticateReducer.handleLoginByUserName,
      errorMessages.LOGIN_BY_USERNAME_FAILED,
    );
  },
});

export default AuthenticateServiceSlices.reducer;
