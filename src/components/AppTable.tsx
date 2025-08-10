import { Tooltip } from "@heroui/tooltip";
import { Edit, Trash } from "iconsax-react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useTranslation } from "react-i18next";

import { AppPagination } from "@/components/AppPagination.tsx";
import { CloseIcon } from "@/icons/CloseIcon.tsx";

const AppTable = ({ props }: { props: any }) => {
  const {
    data,
    columns,
    onOpenEditDialog,
    onOpenShowDialog,
    hasPagination = true,
    hasPadding = true,
    hasShadow = true,
    hasRowBorder = true,
    extraMessage,
    selectionMode,
  } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t } = useTranslation();

  if (!data.length) return <div className="p-4">No data available</div>;

  const autoColumns =
    columns ||
    Object.keys(data[0])
      .filter((key) => key !== "id")
      .map((key) => ({ key, label: key }));

  const renderActions = () => (
    <div className="relative flex items-center justify-center gap-2">
      <Tooltip content="Edit">
        <Button
          className="!min-w-fit !p-0 !w-4 !h-4 !rounded-0 !bg-transparent"
          onPress={onOpenEditDialog}
        >
          <span className="text-lg cursor-pointer">
            <Edit size="16" />
          </span>
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          className="!min-w-fit !p-0 !w-4 !h-4 !rounded-0 !bg-transparent"
          onPress={onOpen}
        >
          <span className="text-lg cursor-pointer">
            <Trash size="16" />
          </span>
        </Button>
      </Tooltip>
    </div>
  );

  return (
    <div
      className={`bg-primary-50 w-full border border-primary dark:border-surface-200 dark:bg-[rgba(4,66,92,0.60)] ${hasPadding && "pt-5 pl-5 pr-6"} pb-4 h-full !rounded-[14px] ${hasShadow && "shadow-shadow-light-tight/1"}`}
    >
      <Table
        className="!h-[95%]"
        classNames={{
          th: "bg-primary",
        }}
        selectionMode={selectionMode}
      >
        <TableHeader className="!rounded-0">
          {autoColumns.map((col: any) => (
            <TableColumn
              key={col.key}
              className="text-white dark:text-white text-sm font-semibold bg-primary dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12"
            >
              {col.label}
            </TableColumn>
          ))}
          <TableColumn className="text-white dark:text-white text-sm font-semibold bg-primary dark:bg-[rgba(4,66,92,0.60)] text-center">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow
              key={row.id ?? index}
              className={`${hasRowBorder && "border-b border-[#dcf0f966] dark:border-[#04425c66]"} hover:bg-surface dark:hover:bg-[#04425c66] !rounded-4 transition-colors !h-12`}
              onClick={onOpenShowDialog}
            >
              {autoColumns.map((col: any) => (
                <TableCell
                  key={col.key}
                  className="text-xs font-normal text-black dark:text-white text-center"
                >
                  {row[col.key] ??
                    (col.key.toLowerCase().includes("date") ? "Present" : "")}
                </TableCell>
              ))}
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0">
                {renderActions()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasPagination && (
        <div className="flex justify-end">
          <AppPagination
            props={{
              size: "md",
              total: data.length,
            }}
          />
        </div>
      )}
      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-[12px] bg-white dark:info-1000 border-1 border-danger p-12">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="bg-danger flex gap-2 !rounded-4 !px-3 !py-1.5 items-center">
                    <Trash className="text-white" size="18" />
                    <span className="text-xl text-white font-normal leading-normal">
                      {t("wouldItBeAcceptableForYouToRemoveThis")}?
                    </span>
                  </div>
                  <Button
                    className="!w-6 !h-6 !p-0 !min-w-fit !rounded-0"
                    variant="light"
                    onPress={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
                {extraMessage && extraMessage}
              </ModalHeader>
              <ModalFooter>
                <Button
                  className="text-secondary-800 !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  {t("cancel")}
                </Button>
                <Button
                  className="bg-danger text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  onPress={() => {
                    onClose();
                  }}
                >
                  {t("delete")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AppTable;
