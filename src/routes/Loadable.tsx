import { Suspense } from "react";

import App from "../App.tsx";
import Loader from "../components/Loader.tsx";

export const Loadable = (Component: any) => (props: any) => {
  return (
    <App
      props={{
        children: (
          <Suspense fallback={<Loader />}>
            <Component {...props} />
          </Suspense>
        ),
      }}
    />
  );
};
