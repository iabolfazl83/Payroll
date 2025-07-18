import { useSelector } from "react-redux";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { RootState } from "./redux/store.ts";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, any> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App({ props }: { props: any }) {
  const { children } = props;
  const lang = useSelector((state: RootState) => state.language.lang);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [dir, setDir] = useState<"ltr" | "rtl">(lang === "en" ? "ltr" : "rtl");

  useEffect(() => {
    setDir(lang === "en" ? "ltr" : "rtl");
  }, [lang]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          animate={{ opacity: 1 }}
          className={`${dir} h-full min-h-fit 2xl:container 2xl:mx-auto`}
          dir={dir}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          style={{ margin: "0 32px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
          <ToastContainer />
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
