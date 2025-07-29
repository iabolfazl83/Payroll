import { cn, Switch } from "@heroui/react";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store.ts";

export const AppSwitch = ({ props }: { props: any }) => {
  const { isSelected, handleChange, children, classNames } = props;

  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <Switch
      classNames={{
        thumb:
          classNames?.thumb +
          " " +
          cn(
            "shadow-lg !w-3 !h-3 transition-all duration-300 ease-in-out transform",
            "dark:bg-info-1000 dark:shadow-lg",
            "group-data-[selected=true]:ms-2.5",
            "scale-100",
            isSelected && (lang === "en" ? "!mr-auto" : "!ml-auto"),
          ),
        wrapper:
          classNames?.wrapper +
          " " +
          cn(
            "!w-[30px] !h-[18px] rounded-full flex items-center justify-start transition-all duration-500 ease-in-out",
            "bg-neutral-200 text-info-1000 dark:bg-netural-100",
            "group-data-[selected=true]:bg-primary-400",
          ),
        ...classNames,
      }}
      isSelected={isSelected}
      size="sm"
      onValueChange={handleChange}
    >
      {children}
    </Switch>
  );
};
