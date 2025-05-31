import Lottie from "lottie-react";

import loader from "../lottie/loader.json";

const Loader = () => {
  return (
    <div className="bg-white dark:bg-black w-full h-full z-50 absolute">
      <div className="w-8 h-8 absolute left-1/2 top-1/2">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
