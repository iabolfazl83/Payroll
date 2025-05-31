import axios from "axios";
import { toast, ToastPosition} from "react-toastify";

export const apiRequest = async (
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE" = "GET",
  data?: Record<string, any>,
) => {
  const options: {
    method: string;
    url: string;
    data?: Record<string, any>;
    auth: {
      username:string,
      password: string
    },
    withCredentials: boolean;
  } = {
    method,
    url,
    auth: {
      username: "0016456173",
      password: "qwerty1234567"
    },
    withCredentials: true,
  };

  if (data) {
    options.data = data;
  }

  const response = await axios(options);
  return response.data;
};

export const setLoadingAndError = (state: any) => {
  state.loading = true;
  state.error = null;
};

export const setLoadingFalse = (state: any) => {
  state.loading = false;
};

export const setError = (state: any, errorMessage: string) => {
  state.loading = false;
  state.error = errorMessage || "An unknown error occurred.";
};

export const handleApiError = (error: any, message: any) => {
  console.error(message, error);
  throw new Error(message);
};

export function addAsyncCase(
  builder: any,
  action: any,
  successReducer: any,
  errorMessage: any,
) {
  builder
    .addCase(action.pending, (state: any) => setLoadingAndError(state))
    .addCase(action.fulfilled, (state: any, action: any) =>
      successReducer(state, action),
    )
    .addCase(action.rejected, (state: any) => setError(state, errorMessage));
}

export const notify = (
  message: string,
  type: string,
  position: ToastPosition
) => {
  if (type in toast) {
    (toast as any)[type](message, { position });
  } else {
    toast(message, { position });
  }
};