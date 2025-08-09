import { useTranslation } from "react-i18next";
import { ArrowLeft2, ArrowUp2, Building } from "iconsax-react";
import { Button, Select, SelectItem, useDisclosure } from "@heroui/react";

import { useDarkMode } from "@/context/DarkMode.tsx";
import { Index as Icons } from "@/icons/Index.tsx";
import PageHeaderTab from "@/components/PageHeaderTab.tsx";
import { routeUrls } from "@/routes";
import Search from "@/components/Search.tsx";
import FilterModal from "@/components/FilterModal.tsx";

export default function SalaryDetailTabs({ props }: { props: any }) {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const isSalaryCalculations = routeUrls.home + routeUrls.salaryCalculations;
  const goBack = () => {
    history.back();
  };
  const {
    isOpen: isFilterOpen,
    onOpen: onFilterOpen,
    onOpenChange: onFilterOpenChange,
  } = useDisclosure();
  const { data } = props;
  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <div className="flex justify-between w-full mb-2">
      <div className="flex gap-2 items-center flex-2">
        <Button className="bg-unset w-fit min-w-0 p-0" onPress={goBack}>
          <ArrowLeft2 />
        </Button>
        <PageHeaderTab
          props={{
            icon: (
              <Icons.Card
                color={
                  isSalaryCalculations ? "#fff" : darkMode ? "#fff" : "#04070E"
                }
              />
            ),
            title: t("salaryCalculations"),
            isActive: isSalaryCalculations,
            path: routeUrls.home + "/" + routeUrls.salaryCalculations,
          }}
        />
      </div>
      <div className="flex gap-3">
        <Button>{t("salaryProcessing")}</Button>
        <Select
          className="max-w-xs"
          classNames={{
            base: "shadow-lg rounded-4",
            trigger:
              "bg-white dark:bg-info-1000 border-1 border-primary-400 dark:border-surface-200",
            value: "text-secondary-400 dark:text-secondary-0",
            listbox: "bg-white dark:bg-info-1000",
            popoverContent:
              "data-[open=true]:!shadow-lg data-[open=true]:dark:!shadow-[0px_10px_30px_0px_(#152446)]",
          }}
          placeholder={t("organization")}
          radius="sm"
          scrollShadowProps={{
            isEnabled: false,
          }}
          selectorIcon={
            <ArrowUp2 fill={`${darkMode ? "#ffffff" : "#292D32"}`} />
          }
          startContent={<Building />}
        >
          {animals.map((animal) => (
            <SelectItem
              key={animal.key}
              className="hover:!bg-main-light
              data-[hover=true]:!bg-main-light
               data-[focus=true]:!bg-main-light
                data-[focus=true]:!outline-none
                  focus:!bg-main-light

              dark:data-[hover=true]:!bg-[rgba(4,66,92,0.60)]
               dark:data-[focus=true]:!bg-[rgba(4,66,92,0.60)]
                dark:data-[focus=true]:![rgba(4,66,92,0.60)]
                 dark:hover:!bg-[rgba(4,66,92,0.60)]
                  dark:focus:!bg-[rgba(4,66,92,0.60)]

                   cursor-pointer
                    p-2 rounded-4
                    !outline-none
                    text-foreground dark:text-white"
              startContent={<Building fill="text-foreground" />}
            >
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Search placeholder="Search Sth" />
        <FilterModal
          props={{
            data: {
              nameList: data.nameList,
              sortOptions: data.sortOptions,
              EmployeeName: data.EmployeeName,
            },
            isOpen: isFilterOpen,
            onOpenChange: onFilterOpenChange,
          }}
        />
        <Button>{t("revert")}</Button>
        <Button>{t("editHistory")}</Button>
      </div>
    </div>
  );
}
