import { useState, useRef, useEffect } from "react";
import { Button, Input } from "@heroui/react";
import { useTranslation } from "react-i18next";

import { useDarkMode } from "@/context/DarkMode.tsx";

export default function Search({
  color = "#04070E",
  size = 24,
  placeholder = "",
}: {
  color?: string;
  size?: string | number;
  placeholder?: string;
}) {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();

  darkMode ? (color = "#ffffff") : color;
  placeholder === "" ? (placeholder = t("search") + "...") : placeholder;
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  return (
    <div
      className={`!bg-white dark:!bg-info-1000 flex items-center  border border-primary dark:border-surface-200 rounded-4 py-0 ${expanded ? "px-3 gap-2" : "px-2 gap-0"}`}
    >
      <div className="cursor-pointer">
        <Button
          className="w-fit min-w-unset bg-unset min-w-0 p-0"
          onPress={() => setExpanded((prev) => !prev)}
        >
          <svg
            fill="none"
            height={size}
            viewBox="0 0 24 24"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M22 22L20 20"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </Button>
      </div>

      <div
        className={`transition-all duration-300 ${
          expanded ? "w-[300px] opacity-100" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <Input
          ref={inputRef}
          classNames={{
            inputWrapper: "!bg-white dark:!bg-info-1000 p-1.5 !rounded-1",
          }}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
}
