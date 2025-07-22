import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";

import { JudgmentIssuedLayout } from "@/pages/JudgmentIssued/Layout.tsx";
import PageHeader from "@/components/PageHeader.tsx";
import PageTabs from "@/pages/JudgmentIssued/PageTabs.tsx";
import AppTable from "@/components/AppTable.tsx";
import SelectCalendarWithTime from "@/components/Calendar/SelectCalendarWithTime.tsx";
import GeneralDetails from "@/components/GeneralDetails";
import ModalGroupOrder from "@/pages/JudgmentIssued/ModalGroupOrder.tsx";

export default function IndividuaOrder() {
  const [isTableExpanded, setTableIsExpanded] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isShowMode, setIsShowMode] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const DUMMY_DATA = [
    {
      id: 1,
      no: 1,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 2,
      no: 2,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 3,
      no: 3,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 4,
      no: 4,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 5,
      no: 5,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 6,
      no: 6,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 7,
      no: 7,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
    {
      id: 8,
      no: 8,
      title: "Order",
      type: "Group",
      category: "Housing Allowance",
      orderReference: "Nahira",
      creationDate: "2023/11/10",
    },
  ];

  const tableColumns = [
    { key: "no", label: "No." },
    { key: "title", label: "Title" },
    { key: "type", label: "Type" },
    { key: "category", label: "Category" },
    { key: "orderReference", label: "Order Reference" },
    { key: "creationDate", label: "Creation Date" },
  ];

  const tableProps = {
    data: DUMMY_DATA,
    columns: tableColumns,
    onOpenEditDialog: () => {
      setIsEditMode(true);
      setIsShowMode(false);
      onOpen();
    },
    onOpenShowDialog: () => {
      setIsEditMode(false);
      setIsShowMode(true);
      onOpen();
    },
    hasPagination: true,
    hasPadding: true,
    hasShadow: true,
    hasRowBorder: true,
  };

  return (
    <JudgmentIssuedLayout
      props={{
        children: (
          <>
            <PageHeader props={{ children: <PageTabs /> }} />
            <ModalGroupOrder
              isEditMode={isEditMode}
              isOpen={isOpen}
              isShowMode={isShowMode}
              onOpenChange={onOpenChange}
            />
            <div className="w-full h-full rounded-4">
              <div className="h-full min-h-fit w-full">
                <div className="flex gap-4 h-full min-h-fit">
                  <div className={`relative w-full`}>
                    <button
                      className="dark:bg-info-1000 bg-white cursor-pointer flex justify-center items-center absolute top-[50px] right-[-10px] w-6 h-6 rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.20)]"
                      onClick={() => setTableIsExpanded(!isTableExpanded)}
                    >
                      {isTableExpanded ? (
                        <ArrowLeft2
                          className="cursor-pointer text-info-1000 dark:text-white"
                          size="12"
                        />
                      ) : (
                        <ArrowRight2
                          className="cursor-pointer text-info-1000 dark:text-white"
                          size="12"
                        />
                      )}
                    </button>
                    <AppTable props={tableProps} />
                  </div>
                  {!isTableExpanded && (
                    <div
                      className={`flex flex-col gap-2 h-full transition-all duration-300  ${isTableExpanded ? "w-[0px]" : "w-[30%]"}`}
                    >
                      <div className="bg-primary-50 dark:bg-transparent rounded-5 h-[73%] w-full">
                        <div className="w-full h-full">
                          <SelectCalendarWithTime />
                        </div>
                      </div>
                      <div className="h-[27%] w-full">
                        <GeneralDetails
                          props={{
                            generalAmount: 90,
                            detailAmounts: [90, 50, 10, 30],
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
}
