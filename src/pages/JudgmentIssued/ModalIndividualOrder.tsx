import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { AppInput } from "../../components/AppInput.tsx";

import { AppTextArea } from "@/components/AppTextArea.tsx";
import { Candle } from "@/icons/Candle.tsx";
import AddModalInnerTableIndividualOrder from "@/pages/JudgmentIssued/AddModalInnerTableIndividualOrder.tsx";

export default function ModalIndividualOrder({
  isOpen,
  onOpenChange,
  isShowMode,
  isEditMode,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  isShowMode: boolean;
  isEditMode: boolean;
}) {
  const formik = useFormik({
    initialValues: {
      title: "",
      organizations: "",
      departmentsUnits: "",
      person: "",
      name: "",
      types: "",
      effectiveDate: "",
      Insurance: "",
      taxBranch: "",
      category: "",
      descriptions: "",
      changing: "",
      notChanging: "",
    },
    validationSchema: Yup.object({
      descriptions: Yup.string().required("Descriptions Required"),
      title: Yup.string().required("title Required"),
      organizations: Yup.string().required("organizations Required"),
      departmentsUnits: Yup.string().required("departmentsUnits Required"),
      person: Yup.string().required("person Required"),
      name: Yup.string().required("name Required"),
      types: Yup.string().required("types Required"),
      effectiveDate: Yup.string().required("effectiveDate Required"),
      Insurance: Yup.string().required("Insurance Required"),
      taxBranch: Yup.string().required("taxBranch Required"),
      category: Yup.string().required("category Required"),
    }),
    onSubmit: () => {
      onOpenChange();
    },
  });
  const { t } = useTranslation();
  const [changing, setChanging] = useState<string>("false");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChanging(e.target.value);
  };
  const DUMMY_DATA = [
    {
      id: 1,
      no: 1,
      list: "123456",
      primeNumber: 1000000,
      eleman: ["Hydrogen", "Hydrogen 2", "Hydrogen 3"],
      coefficient: 1.23,
      fixedNumber: 42,
      calculationInEid: true,
      years: false,
    },
    {
      id: 2,
      no: 2,
      list: "123456",
      primeNumber: 1000000,
      eleman: ["Helium", "Helium 2", "Helium 3"],
      coefficient: 2.5,
      fixedNumber: 17,
      calculationInEid: true,
      years: false,
    },
    {
      id: 3,
      no: 3,
      list: "123456",
      primeNumber: 1000000,
      eleman: ["Lithium", "Lithium 2", "Lithium 3"],
      coefficient: 3.14,
      fixedNumber: 99,
      calculationInEid: true,
      years: false,
    },
    {
      id: 4,
      no: 4,
      list: "123456",
      primeNumber: 1000000,
      eleman: ["Beryllium", "Beryllium 2", "Beryllium 3"],
      coefficient: 4.8,
      fixedNumber: 21,
      calculationInEid: true,
      years: false,
    },
    {
      id: 5,
      no: 5,
      list: "123456",
      primeNumber: 1000000,
      eleman: ["Boron", "Boron 2", "Boron 3"],
      coefficient: 5.67,
      fixedNumber: 88,
      calculationInEid: true,
      years: false,
    },
  ];

  const DUMMY_COLUMNS = [
    { key: "no", label: "No." },
    { key: "list", label: "List" },
    { key: "primeNumber", label: "Prime Number" },
    { key: "eleman", label: "Eleman" },
    { key: "coefficient", label: "Coefficient" },
    { key: "fixedNumber", label: "Fixed Number" },
    { key: "calculationInEid", label: "Calculation in Eid" },
    { key: "years", label: "Years" },
  ];

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      className={`${changing === "true" ? "w-full max-w-[90%]" : "w-full max-w-[60%]"} `}
      isOpen={isOpen}
      placement="top"
      onOpenChange={onOpenChange}
    >
      <ModalContent className="bg-white dark:bg-[#01101a4d] shadow-md shadow-[rgba(8,14,28,0.22)] dark:shadow-secondary-600 backdrop-blur-[40px] p-12 aria-[modal]:!rounded-6">
        {(onClose) => (
          <div className="flex flex-col gap-8">
            <ModalHeader className="flex flex-col gap-1 !p-0">
              <div className="flex justify-between items-center">
                <div className="bg-primary dark:bg-surface-primary shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                  <Candle color="#ffffff" />
                  <span className="text-white font-normal text-xl">
                    {isEditMode
                      ? t("editIndividualOrder")
                      : isShowMode
                        ? t("showIndividualOrder")
                        : t("addNewIndividualOrder")}
                  </span>
                </div>
                <Button
                  className="!min-w-fit !rounded-0 w-6 h-6 !p-0"
                  variant="light"
                  onPress={onClose}
                >
                  <svg
                    fill="none"
                    height="25"
                    viewBox="0 0 24 25"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6465 6.14648C17.8173 5.97563 18.0813 5.95387 18.2754 6.08203L18.3535 6.14648C18.5244 6.31735 18.5461 6.58131 18.418 6.77539L18.3535 6.85352L12.707 12.5L18.3535 18.1465C18.5488 18.3417 18.5488 18.6583 18.3535 18.8535C18.1583 19.0488 17.8417 19.0488 17.6465 18.8535L12 13.207L6.35352 18.8535C6.18265 19.0244 5.91869 19.0461 5.72461 18.918L5.64648 18.8535C5.47563 18.6827 5.45387 18.4187 5.58203 18.2246L5.64648 18.1465L11.293 12.5L5.64648 6.85352C5.47562 6.68265 5.45387 6.41869 5.58203 6.22461L5.64648 6.14648C5.81735 5.97562 6.08131 5.95387 6.27539 6.08203L6.35352 6.14648L12 11.793L17.6465 6.14648Z"
                      fill="#04070E"
                      stroke="#666666"
                    />
                  </svg>
                </Button>
              </div>
            </ModalHeader>
            <ModalBody className="!p-0">
              <Form
                className="w-full flex flex-col gap-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    <AppInput
                      props={{
                        label: t("title"),
                        required: false,
                        error: formik.errors.title,
                        name: "title",
                        placeholder: t("describeTitle"),
                        type: "text",
                        value: formik.values.title,
                        formik: formik,
                        isShowMode,
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("organizations"),*/}
                    {/*    required: false,*/}
                    {/*    error: formik.errors.organizations,*/}
                    {/*    name: "organizations",*/}
                    {/*    placeholder: t("organizations"),*/}
                    {/*    type: "select",*/}
                    {/*    value: formik.values.organizations,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("national_code"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("date_of_birth"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("gender"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("marital_status"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("military_service_status"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("city"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("address"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("minimum_salary"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("working_category"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("organizational_category"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    {/*<AppInput*/}
                    {/*  props={{*/}
                    {/*    label: t("social_media_links"),*/}
                    {/*    required: true,*/}
                    {/*    error: formik.errors.firstname,*/}
                    {/*    name: "firstname",*/}
                    {/*    placeholder: "",*/}
                    {/*    type: "text",*/}
                    {/*    value: formik.values.firstname,*/}
                    {/*    formik: formik,*/}
                    {/*isShowMode,*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <AppTextArea
                      props={{
                        label: t("descriptions"),
                        required: true,
                        error: formik.errors.descriptions,
                        name: "descriptions",
                        type: "text",
                        value: formik.values.descriptions,
                        formik: formik,
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-14 w-full">
                  <div className="flex flex-col gap-1 w-full">
                    {/*  <AppInput*/}
                    {/*    props={{*/}
                    {/*      label: t("changing"),*/}
                    {/*      error: formik.errors.changing,*/}
                    {/*      name: "changing",*/}
                    {/*      type: "radio",*/}
                    {/*      value: formik.values.changing,*/}
                    {/*      formik: formik,*/}
                    {/*    }}*/}
                    {/*  />*/}
                    <RadioGroup
                      classNames={{
                        wrapper: "w-full flex flex-nowrap",
                      }}
                      orientation="horizontal"
                      value={changing}
                      onChange={handleChange}
                    >
                      <div className="flex gap-1 w-1/2">
                        <Radio
                          checked={changing === "true"}
                          classNames={{
                            label: "dark:text-white",
                          }}
                          value="true"
                        >
                          {t("changing")}
                        </Radio>
                      </div>
                      <div className="flex gap-1 w-1/2">
                        <Radio
                          checked={changing === "false"}
                          classNames={{
                            label: "dark:text-white",
                          }}
                          value="false"
                        >
                          {t("notChanging")}
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {changing === "true" && (
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full">
                      <div className="text-secondary-400 dark:text-secondary-0 mb-2">
                        {t("computationalCoefficients")}
                      </div>
                      <div>
                        <AddModalInnerTableIndividualOrder
                          props={{
                            data: DUMMY_DATA,
                            columns: DUMMY_COLUMNS,
                            hasPagination: false,
                            hasPadding: true,
                            hasShadow: false,
                            hasRowBorder: false,
                            onOpenEditDialog: () =>
                              console.log("Edit dialog opened"),
                          }}
                        />
                        <div className="px-5 py-2 w-full bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] rounded-4">
                          <div className="flex justify-between pl-5 py-2">
                            <div className="text-sm">{t("total")}:</div>
                            <div className="text-xs">{t("coefficient")}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="felx flex-col mt-3">
                      <div>
                        <h4 className="text-secondary-400 dark:text-secondary-0 font-bold">
                          {t("insurance")}:
                        </h4>
                      </div>
                      <div className="mt-4 px-2 flex flex-col gap-5">
                        <div className="text-sm text-netural-400 flex justify-between">
                          <span>{t("workersShareInsurance")}</span>
                          <span>69%</span>
                        </div>
                        <div className="text-sm text-netural-400 flex justify-between">
                          <span>{t("employersShareInsurance")}</span>
                          <span>69%</span>
                        </div>
                        <div className="text-sm text-netural-400 flex justify-between">
                          <span>{t("unemploymentInsurance")}</span>
                          <span>69%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Form>
            </ModalBody>
            <ModalFooter
              className={`!p-0 flex items-end ${changing === "true" ? "justify-between" : ""}`}
            >
              {changing === "true" && (
                <div className="flex flex-col gap-3 w-full">
                  <h4 className="text-secondary-400 dark:text-secondary-0 font-bold">
                    {t("tax")}:
                  </h4>
                  <div>
                    <RadioGroup
                      classNames={{
                        wrapper: "w-full flex flex-nowrap",
                      }}
                      orientation="horizontal"
                    >
                      <div className="flex gap-1 w-1/2">
                        <Radio
                          classNames={{
                            label: "dark:text-white",
                          }}
                          value="true"
                        >
                          {t("noEditTax")}
                        </Radio>
                      </div>
                      <div className="flex gap-1 w-1/2">
                        <Radio
                          classNames={{
                            label: "dark:text-white",
                          }}
                          value="false"
                        >
                          {t("editTax")}
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <Button
                  className="text-xl font-normal rounded-3"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  {t("cancel")}
                </Button>
                <Button
                  className="bg-primary dark:bg-surface-200 text-xl font-normal text-white rounded-3"
                  onPress={onClose}
                >
                  {t("submit")}
                </Button>
              </div>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}
