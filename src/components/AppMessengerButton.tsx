import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SupportIcon } from "@/icons/supportIcon.tsx";
import { RootState } from "@/redux/store.ts";

export const AppMessengerButton = () => {
  const navigate = useNavigate();
  const lang = useSelector((state: RootState) => state.language.lang);
  const navigateToMessenger = () => {
    navigate("/hrlink/messenger");
  };

  return (
    <button
      className={`rounded-full bg-[linear-gradient(0deg,_#900F2E_0%,_#FD1B51_126.58%)] shadow-[0px_1.417px_4.253px_rgba(0,0,0,0.3)] absolute ${lang === "fa" ? "left-10" : "right-10"} bottom-10 w-[72px] h-[72px] flex justify-center items-center z-[1000]`}
      onClick={navigateToMessenger}
    >
      <SupportIcon />
    </button>
  );
};
