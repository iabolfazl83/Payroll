import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Edit, Trash } from "iconsax-react";
import {
  Button,
  Checkbox,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFormik } from "formik";

import { CloseIcon } from "@/icons/CloseIcon.tsx";
import { AppAutoComplete } from "@/components/AppAutoComplete.tsx";
import { AppInput } from "@/components/AppInput.tsx";

const IndividualOrderInnerTable = ({ props }: { props: any }) => {
  const { data } = props;
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isEditMode, setIsEditMode] = useState(false);

  type FormValues = {
    id: number;
    no: number;
    list: number;
    primeNumber: number;
    eleman: number;
    coefficient: number;
    fixedNumber: number;
    calculationInEid: boolean;
    years: boolean;
  };

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      id: data.id || "",
      no: data.no || "",
      primeNumber: data.primeNumber || "",
      coefficient: data.coefficient || "",
      fixedNumber: data.fixedNumber || "",
      list: data.list || "",
      eleman: data.eleman || "",
      calculationInEid: data.calculationInEid || false,
      years: data.years || false,
    },
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  const DUMMY_PARAMETERS = [
    { id: 1, label: "Legal" },
    { id: 2, label: "Illegal" },
    { id: 3, label: "Conditionally Legal" },
    { id: 4, label: "Under Review" },
    { id: 5, label: "Unknown" },
  ];

  const DUMMY_ELEMAN = [
    { id: 1, label: "Ali Rezaei" },
    { id: 2, label: "Sara Mohammadi" },
    { id: 3, label: "Hossein Karimi" },
    { id: 4, label: "Fatemeh Ghasemi" },
    { id: 5, label: "Mohammad Taheri" },
    { id: 6, label: "Narges Jafari" },
    { id: 7, label: "Ehsan Rahimi" },
    { id: 8, label: "Leila Kazemi" },
    { id: 9, label: "Reza Shokri" },
    { id: 10, label: "Maryam Ahmadi" },
  ];

  if (!data.length) return <div className="p-4">No data available</div>;
  const renderActions = () => (
    <div className="relative flex items-center justify-center gap-2">
      <Tooltip content="Edit">
        <Button
          className="!min-w-fit !p-0 !w-4 !h-4 !rounded-0 !bg-transparent"
          onPress={() => {
            setIsEditMode(!isEditMode);
          }}
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
    <div className={`bg-white dark:bg-info-1000 pb-4 h-full !rounded-[14px]`}>
      <Table
        aria-label="Customizable Table"
        className="!h-[95%]"
        classNames={{
          th: `first:pl-9 last:pr-9 px-7`,
        }}
      >
        <TableHeader className="!rounded-0">
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("no")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("list")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("primeNumber")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("eleman")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("coefficient")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("fixedNumber")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("calculationInEid")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12">
            {t("years")}
          </TableColumn>
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] text-center">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow
              key={row.id ?? index}
              className={`border-b border-[#dcf0f966] dark:border-[#04425c66] hover:bg-surface dark:hover:bg-[#04425c66] !rounded-4 transition-colors !h-12`}
            >
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {row.id ?? index}
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <AppAutoComplete
                    props={{
                      classNames: {
                        base: `!rounded-none ${isEditMode ? "border-[#DCF0F9]" : "border-main-light"}`,
                      },
                      disabled: !isEditMode,
                      data: DUMMY_PARAMETERS,
                      value: row.list,
                      // value: formik.values.list,
                      name: "listId",
                      onChange: formik.handleChange,
                    }}
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <AppInput
                    props={{
                      classNames: {
                        inputWrapper: `!rounded-none ${isEditMode ? "border-[#DCF0F9]" : "border-main-light"}`,
                      },
                      disabled: !isEditMode,
                      formik: formik,
                      name: "primeNumber",
                      value: row.primeNumber,
                      // value: formik.values.primeNumber,
                    }}
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <AppAutoComplete
                    props={{
                      classNames: {
                        base: `!rounded-none ${isEditMode ? "border-[#DCF0F9]" : "border-main-light"}`,
                      },
                      disabled: !isEditMode,
                      data: DUMMY_ELEMAN,
                      value: row.eleman,
                      // value: formik.values.eleman,
                      name: "eleman",
                      onChange: formik.handleChange,
                    }}
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <AppInput
                    props={{
                      classNames: {
                        inputWrapper: `!rounded-none ${isEditMode ? "border-[#DCF0F9]" : "border-main-light"}`,
                      },
                      disabled: !isEditMode,
                      type: "number",
                      formik: formik,
                      name: "coefficient",
                      value: row.coefficient,
                      // value: formik.values.coefficient,
                      onChange: formik.handleChange,
                    }}
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <AppInput
                    props={{
                      classNames: {
                        inputWrapper: `!rounded-none ${isEditMode ? "border-[#DCF0F9]" : "border-main-light"}`,
                      },
                      disabled: !isEditMode,
                      type: "number",
                      formik: formik,
                      name: "fixedNumber",
                      value: row.fixedNumber,
                      // value: formik.values.fixedNumber,
                      onChange: formik.handleChange,
                    }}
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <Checkbox
                    disabled={!isEditMode}
                    isSelected={row.calculationInEid}
                    radius="sm"
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center">
                {
                  <Checkbox
                    disabled={!isEditMode}
                    isSelected={row.years}
                    radius="sm"
                  />
                }
              </TableCell>
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0">
                {renderActions()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="flex justify-between items-center w-full">
                  <div className="bg-danger flex gap-2 !rounded-4 !px-3 !py-1.5 items-center">
                    <Trash className="text-white" size="18" />
                    <span className="text-xl text-white font-normal leading-normal">
                      Would it be acceptable for you to remove this?
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
              </ModalHeader>
              <ModalFooter>
                <Button
                  className="text-secondary-800 !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-danger text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default IndividualOrderInnerTable;
