import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiRequest } from "@/utils/general.ts";
import { ApiEndpointsHRBox } from "@/utils/endpoints.ts";
import {
  LoginByOtpProps,
  LoginByUserName,
  RegisterUser,
  ResetPasswordCheckOtpProps,
  SendOtpProps,
} from "@/types";
import { PATH_HRBox } from "@/routes/paths.ts";

export const handleLoginByUserNameApi = createAsyncThunk(
  "auth/loginByUserName",
  async (loginData: LoginByUserName) => {
    return await apiRequest(ApiEndpointsHRBox.loginApi, "POST", loginData).then(
      (response) => {
        localStorage.setItem("accessToken", response.data.Token);
        localStorage.setItem(
          "profile",
          JSON.stringify(response.data.Organnizations),
        );
      },
    );
  },
);

export const handleSendOtpApi = createAsyncThunk(
  "auth/sendOtp",
  async (data: SendOtpProps & { navigate: Function }) => {
    const { navigate, ...sendOtpData } = data;

    const response = await apiRequest(
        ApiEndpointsHRBox.sendOtpApi,
      "POST",
      sendOtpData,
    );

    localStorage.setItem("otp", response.data.message);
    localStorage.setItem("user", sendOtpData.UsernameOrMobile);

    navigate(PATH_HRBox.OneTimePassword);

    return response;
  },
);

export const handleResetPasswordCheckOtpApi = createAsyncThunk(
  "auth/resetPasswordCheckOtp",
  async (data: ResetPasswordCheckOtpProps & { navigate: Function }) => {
      const { navigate, ...resetPasswordCheckOtp } = data;
    const response = await apiRequest(
        ApiEndpointsHRBox.resetPasswordCheckOtpApi,
      "POST",
      resetPasswordCheckOtp,
    );

    localStorage.setItem("GuidCode", response.data.data);

    navigate(PATH_HRBox.ResetPassword)
  },
);

export const handleLoginByOtpApi = createAsyncThunk(
  "auth/loginByOtp",
  async (loginByOtp: LoginByOtpProps) => {
    return await apiRequest(ApiEndpointsHRBox.loginByOtp, "POST", loginByOtp);
  },
);

export const handleRegisterUserApi = createAsyncThunk(
  "auth/registerUser",
  async (registerData: RegisterUser) => {
    return await apiRequest(ApiEndpointsHRBox.registerApi, "POST", registerData);
  },
);
