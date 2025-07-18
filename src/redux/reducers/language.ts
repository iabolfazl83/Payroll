import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "en", locale: "en-US" },
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
    },
    setLocalLanguage(state, action) {
      state.locale = action.payload;
    },
  },
});

export const { setLanguage, setLocalLanguage } = languageSlice.actions;

export const selectLanguage = (state: { language: { lang: string } }) => ({
  lang: state.language.lang,
});

export default languageSlice.reducer;
