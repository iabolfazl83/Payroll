import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

import { useDarkMode } from "@/context/DarkMode.tsx";

export default function AddButton({
  onClick,
  color = "#04070E",
  size = 24,
  text = "",
}: {
  onClick: () => void;
  color?: string;
  size?: number | string;
  text?: string;
}) {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();

  darkMode ? (color = "#ffffff") : color;

  text === "" ? (text = t("addNewOne")) : text;

  return (
    <Button
      className="border border-primary dark:border-surface-200 px-2 py-5 !rounded-4 w-fit min-w-unset bg-unset min-w-0"
      onPress={onClick}
    >
      <svg
        fill="none"
        height={size}
        viewBox={`0 0 24 24`}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4418_9825)">
          <path
            d="M6 12H18"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 18V6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_4418_9825">
            <rect fill={color} height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
      <span>{text}</span>
    </Button>
  );
}
