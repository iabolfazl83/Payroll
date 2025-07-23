import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useSelector } from "react-redux";
import { ArrowDown2 } from "iconsax-react";

import { RootState } from "@/redux/store.ts";
import { useDarkMode } from "@/context/DarkMode.tsx";

export const AppAutoComplete = ({ props }: { props: any }) => {
  const {
    data,
    label,
    placeholder,
    required,
    disabled,
    value,
    name,
    onChange,
    classNames,
  } = props;
  const lang = useSelector((state: RootState) => state.language.lang);
  const { darkMode } = useDarkMode();

  return (
    <div className="flex flex-col w-full gap-1">
      <span
        className={`text-secondary-1000 lg:text-sm text-xs lg:font-medium font-semibold leading-5 dark:text-white ${
          lang === "en" && ""
        }`}
      >
        {label} {required && "*"}
      </span>
      <Autocomplete
        classNames={{
          base:
            "border-1 border-[#DCF0F9] rounded-5 shadow-none shadow-sm" +
            " " +
            classNames?.base,
          listboxWrapper:
            classNames?.listboxWrapper ?? "!bg-white dark:!bg-info-1000",
          popoverContent:
            classNames?.popoverContent ??
            "data-[open=true]:!shadow-lg data-[open=true]:dark:!shadow-[0px_10px_30px_0px_(#152446)]",
        }}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        scrollShadowProps={{
          isEnabled: false,
        }}
        selectedKey={value?.toString()}
        selectorIcon={
          <ArrowDown2 color={`${darkMode ? "#DDBA69" : "#0A9AD7"}`} />
        }
      >
        {data.map((item: any) => (
          <AutocompleteItem
            key={item.id}
            className="hover:!bg-main-light
          data-[hover=true]:!bg-main-light
          data-[focus=true]:!bg-main-light
          data-[focus=true]:!outline-none
          hover:!bg-main-light
          focus:!bg-main-light

          dark:hover:!bg-[rgba(4,66,92,0.60)]
          dark:data-[hover=true]:!bg-[rgba(4,66,92,0.60)]
          dark:data-[focus=true]:!bg-[rgba(4,66,92,0.60)]
          dark:data-[focus=true]:![rgba(4,66,92,0.60)]
          dark:hover:!bg-[rgba(4,66,92,0.60)]
          dark:focus:!bg-[rgba(4,66,92,0.60)]

          cursor-pointer
          p-2 rounded-4
          !outline-none
          text-foreground dark:text-white"
          >
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};
