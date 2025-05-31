import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line import/order
import { Provider } from "./provider.tsx";
// eslint-disable-next-line import/order
import { Provider as ReduxProvider } from "react-redux";
import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store.ts";

import AnimatedRoutes from "@/components/MotionPage.tsx";
import i18n from "@/i18n/store.ts";
import DarkModeProvider from "@/context/DarkMode.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Provider>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
              <DarkModeProvider>
                <AnimatedRoutes />
              </DarkModeProvider>
            </PersistGate>
          </Provider>
        </ReduxProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
