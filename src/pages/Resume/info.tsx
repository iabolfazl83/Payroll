import { Button } from "@heroui/button";
import {
  ArrowLeft2,
  ArrowRight2,
  Calendar,
  DollarCircle,
  Edit,
  Flag,
  GlobalSearch,
  GpsSlash,
  Heart,
  Location,
  Menu,
  More2,
  Personalcard,
  Profile,
  ProfileTick,
  ReceiveSquare,
  Shield,
} from "iconsax-react";
import {
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AppInput } from "@/components/AppInput.tsx";
import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { AppTextArea } from "@/components/AppTextArea.tsx";
import { AppGeneralDetails } from "@/components/AppGeneralDetails.tsx";
import { AppMap } from "@/components/AppMap.tsx";

export default function ResumeInfo() {
  const { t } = useTranslation();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      firstname: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(),
    }),
    onSubmit: () => {},
  });

  return (
    <ResumeLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex flex-col h-full gap-[14px]">
              <div className="flex justify-between">
                <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit">
                  <Personalcard className="text-white" size="22" />
                  <span className="text-white text-xl font-normal">
                    User Information
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                    color="default"
                    variant="light"
                  >
                    <ArrowLeft2
                      className="text-secondary-1000 dark:text-white"
                      size="24"
                    />
                  </Button>
                  <Button
                    isIconOnly
                    className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                    color="default"
                    variant="light"
                  >
                    <ArrowRight2
                      className="text-secondary-1000 dark:text-white"
                      size="24"
                    />
                  </Button>
                  <Button
                    className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2 flex gap-2"
                    color="default"
                    variant="light"
                  >
                    <ReceiveSquare className="text-secondary-1000 dark:text-white" />
                    <span className="text-secondary-1000 dark:text-white font-semibold text-base">
                      Download Resume
                    </span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 h-full">
                <div className="col-span-3">
                  <div className="flex gap-3 h-full">
                    <div className="bg-white dark:bg-secondary-1000 shadow-shadow-light-tight/1 rounded-[14px] p-4 w-full">
                      <div className="flex justify-between items-center border-b border-neutral-100 pb-2 mb-4">
                        <span className="text-secondary-900 dark:text-white text-xl font-semibold leading-normal">
                          Detailed Information
                        </span>
                        <Button
                          className="w-[26px] h-[26px] !min-w-fit !rounded-2 shadow-shadow-light-tight/1 !p-0"
                          variant="light"
                          onPress={onOpen}
                        >
                          <Edit
                            className="text-secondary-1000 dark:text-white"
                            size="18"
                          />
                        </Button>
                      </div>

                      <div className="flex flex-col gap-8">
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Profile
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              First Name
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Nima
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Profile
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Last Name
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Rahimloo
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <GpsSlash
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              National Code
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            4311438982
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Calendar
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Date Of Birth
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            2000/25/05
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Heart
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Marital Status
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Bachelor
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <ProfileTick
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Gender
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Male
                          </span>
                        </div>
                        <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Shield
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Military Service Status
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            None
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-secondary-1000 shadow-shadow-light-tight/1 rounded-[14px] p-4 w-full">
                      <div className="flex justify-between items-center border-b border-neutral-100 pb-2 mb-4">
                        <span className="text-secondary-900 dark:text-white text-xl font-semibold leading-normal">
                          Detailed Information
                        </span>
                        <Button
                          className="w-[26px] h-[26px] !min-w-fit !rounded-2 shadow-shadow-light-tight/1 !p-0"
                          variant="light"
                          onPress={onOpen}
                        >
                          <Edit
                            className="text-secondary-1000 dark:text-white"
                            size="18"
                          />
                        </Button>
                      </div>

                      <div className="flex flex-col gap-8">
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <More2
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Organizational category
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Competitions
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <DollarCircle
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Minimum salary
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            20ML
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Menu
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white  text-base font-light leading-normal">
                              Working Category
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Referee
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Flag
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              Nationality
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Iranian
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <DollarCircle
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              City
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Qazvin
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <GlobalSearch
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                              City
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Qazvin
                          </span>
                        </div>
                        <div className="p-4 flex justify-between rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-[linear-gradient(90deg,_#FBF1FE_0%,_#FCF8F8_50%,_#F9F0F0_75%,_#FCF4F3_100%)] backdrop-blur-[4px] dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                          <div className="flex items-center gap-1.5">
                            <Location
                              className="text-[#292D32] dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-900 text-base font-light leading-normal">
                              Address
                            </span>
                          </div>
                          <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                            Qazvin, Valiasr, Tan va Ravan Sazman Varzesh Qazvin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3">
                  <AppGeneralDetails />
                  <AppMap
                    props={{
                      isEdit: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpen}
              size="4xl"
              onOpenChange={onOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 dark:bg-[#01101a4d] shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <div className="flex flex-col gap-8">
                    <ModalHeader className="flex flex-col gap-1 !p-0">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <Personalcard className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Edit General Informations
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
                                label: t("first_name"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("last_name"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("national_code"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("date_of_birth"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("gender"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("marital_status"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("military_service_status"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("city"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("address"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("minimum_salary"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("working_category"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("organizational_category"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: t("social_media_links"),
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-full">
                            <AppTextArea
                              props={{
                                label: "social_media_links",
                                required: true,
                                error: formik.errors.firstname,
                                name: "firstname",
                                placeholder: "",
                                type: "text",
                                value: formik.values.firstname,
                                formik: formik,
                              }}
                            />
                          </div>
                        </div>
                      </Form>
                    </ModalBody>
                    <ModalFooter className="!p-0">
                      <Button
                        className="text-xl font-normal"
                        color="default"
                        variant="light"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-secondary-400 dark:bg-surface-200 text-xl font-normal text-white"
                        onPress={onClose}
                      >
                        Save Changes
                      </Button>
                    </ModalFooter>
                  </div>
                )}
              </ModalContent>
            </Modal>
          </div>
        ),
      }}
    />
  );
}
