import { Suspense } from "react";

import App from "../App.tsx";
import Loader from "../components/Loader.tsx";

// eslint-disable-next-line react/display-name
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
