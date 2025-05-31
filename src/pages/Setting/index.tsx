import {
  CallCalling,
  Edit,
  Lock,
  MedalStar,
  Profile,
  Sms,
  UserRemove,
  VolumeHigh,
} from "iconsax-react";
import {
  Avatar,
  Button,
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  useDisclosure,
} from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import { SettingLayout } from "@/pages/Setting/Layout.tsx";
import AvatarUser from "@/assets/img/Avatar.jpg";
import { AppInput } from "@/components/AppInput.tsx";
import { AppTextArea } from "@/components/AppTextArea.tsx";
import { JobOffersIcon } from "@/icons/jobOffers.tsx";

export default function Setting() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      oldPassa: "",
      newpass: "",
      repeatPass: "",
    },
    validationSchema: Yup.object({
      oldPassa: Yup.string().required(),
      newpass: Yup.string().required(),
      repeatPass: Yup.string().required(),
    }),
    onSubmit: () => {},
  });

  return (
    <SettingLayout
      props={{
        children: (
          <div className="grid grid-cols-2 gap-3 h-[calc(100%-132px)] w-full">
            <div className="col-span-1 flex flex-col gap-3 h-full w-full">
              <div className="bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 rounded-5 px-3 !py-3 w-full h-full relative">
                <img
                  alt=""
                  className="w-full h-full absolute left-0 top-0 opacity-[0.2] blur rounded-[14px]"
                  src={AvatarUser}
                />
                <div className="flex justify-between border-b-1 border-netural-100 dark:border-netural-700 pb-1.5">
                  <span className="text-secondary-900 dark:text-white text-xl font-normal leading-normal">
                    General Details
                  </span>

                  <div className="flex gap-1.5">
                    <Button
                      className="flex gap-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !rounded-4 !h-[30px] !min-w-fit !px-2 !py-1"
                      onPress={onOpen}
                    >
                      <Lock className="" size="16" />
                      <span className="text-secondary-1000 dark:text-white font-normal text-base">
                        Edit Password
                      </span>
                    </Button>
                    <Button className="!p-1 !rounded-4 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !min-w-fit !w-[30px] !h-[30px]">
                      <Edit />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-3 px-[63px]">
                  <div className="flex justify-center">
                    <Avatar className="w-[72px] h-[72px]" src={AvatarUser} />
                  </div>
                  <Form
                    className="w-full flex flex-col gap-3"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="w-full grid grid-cols-2 gap-[30px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <Profile className="text-[#292D32] dark:text-white" size="12" />
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            {t("first_name")}
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Eva",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <Profile className="text-[#292D32] dark:text-white" size="12" />
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            {t("last_name")}
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Robinson",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-[30px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <Sms className="text-[#292D32] dark:text-white" size="12" />
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            {t("email")}
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "robineva993@gmail.com",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <CallCalling className="text-[#292D32] dark:text-white" size="12" />
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            {t("phone")}
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "0013240450",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-[30px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <svg
                            fill="none"
                            height="12"
                            viewBox="0 0 12 12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.7755 2.02495L10.013 10.275C9.88172 10.8562 9.54422 10.9875 9.05672 10.725L6.41297 8.77495L5.11922 10.0125C4.98797 10.1437 4.85672 10.275 4.55672 10.275L4.76297 7.5562L9.69422 3.07495C9.90047 2.8687 9.63797 2.7937 9.37547 2.96245L3.24422 6.82495L0.600469 6.0187C0.0192192 5.8312 0.0192192 5.43745 0.731719 5.17495L11.0067 1.1812C11.513 1.0312 11.9442 1.2937 11.7755 2.02495Z"
                              fill="black"
                            />
                          </svg>
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            Telegram ID
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Eva",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <svg
                            fill="none"
                            height="12"
                            viewBox="0 0 12 12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.46973 2.5005C3.46959 2.76572 3.36411 3.02002 3.17648 3.20746C2.98885 3.3949 2.73444 3.50013 2.46923 3.5C2.20401 3.49987 1.94971 3.39438 1.76227 3.20675C1.57482 3.01912 1.46959 2.76472 1.46973 2.4995C1.46986 2.23428 1.57534 1.97998 1.76297 1.79254C1.9506 1.6051 2.20501 1.49987 2.47023 1.5C2.73544 1.50013 2.98974 1.60562 3.17719 1.79325C3.36463 1.98088 3.46986 2.23528 3.46973 2.5005ZM3.49973 4.2405H1.49973V10.5005H3.49973V4.2405ZM6.65973 4.2405H4.66973V10.5005H6.63973V7.2155C6.63973 5.3855 9.02473 5.2155 9.02473 7.2155V10.5005H10.9997V6.5355C10.9997 3.4505 7.46973 3.5655 6.63973 5.0805L6.65973 4.2405Z"
                              fill="black"
                            />
                          </svg>
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            Linkedin ID
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Robinson",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-[30px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <svg
                            fill="none"
                            height="12"
                            viewBox="0 0 12 12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.7755 2.02495L10.013 10.275C9.88172 10.8562 9.54422 10.9875 9.05672 10.725L6.41297 8.77495L5.11922 10.0125C4.98797 10.1437 4.85672 10.275 4.55672 10.275L4.76297 7.5562L9.69422 3.07495C9.90047 2.8687 9.63797 2.7937 9.37547 2.96245L3.24422 6.82495L0.600469 6.0187C0.0192192 5.8312 0.0192192 5.43745 0.731719 5.17495L11.0067 1.1812C11.513 1.0312 11.9442 1.2937 11.7755 2.02495Z"
                              fill="black"
                            />
                          </svg>
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            Instagram ID
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Eva",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <svg
                            fill="none"
                            height="12"
                            viewBox="0 0 12 12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.46973 2.5005C3.46959 2.76572 3.36411 3.02002 3.17648 3.20746C2.98885 3.3949 2.73444 3.50013 2.46923 3.5C2.20401 3.49987 1.94971 3.39438 1.76227 3.20675C1.57482 3.01912 1.46959 2.76472 1.46973 2.4995C1.46986 2.23428 1.57534 1.97998 1.76297 1.79254C1.9506 1.6051 2.20501 1.49987 2.47023 1.5C2.73544 1.50013 2.98974 1.60562 3.17719 1.79325C3.36463 1.98088 3.46986 2.23528 3.46973 2.5005ZM3.49973 4.2405H1.49973V10.5005H3.49973V4.2405ZM6.65973 4.2405H4.66973V10.5005H6.63973V7.2155C6.63973 5.3855 9.02473 5.2155 9.02473 7.2155V10.5005H10.9997V6.5355C10.9997 3.4505 7.46973 3.5655 6.63973 5.0805L6.65973 4.2405Z"
                              fill="black"
                            />
                          </svg>
                          <span className="font-normal leading-normal text-xs text-secondary-1000 dark:text-white">
                            Linkedin ID
                          </span>
                        </div>
                        <AppInput
                          props={{
                            label: null,
                            required: false,
                            error: formik.errors.oldPassa,
                            name: "firstname",
                            placeholder: "Robinson",
                            type: "text",
                            value: formik.values.oldPassa,
                            formik: formik,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <AppTextArea
                        props={{
                          label: "Descriptions",
                          required: false,
                          error: formik.errors.oldPassa,
                          name: "firstname",
                          placeholder: "",
                          type: "text",
                          value: formik.values.oldPassa,
                          formik: formik,
                        }}
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-3 w-full">
              <div className="bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 rounded-5 px-3 !py-3 w-full h-full">
                <div className="flex justify-between border-b-1 border-netural-100 dark:border-netural-700 pb-1.5">
                  <span className="text-secondary-900 dark:text-white text-xl font-normal leading-normal">
                    General Setting
                  </span>

                  <div className="flex gap-1.5">
                    <Button className="flex gap-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !rounded-4 !h-[30px] !min-w-fit !px-2 !py-1">
                      <UserRemove className="" size="16" />
                      <span className="text-secondary-1000 dark:text-white font-normal text-base">
                        Deactivate Account
                      </span>
                    </Button>
                    <Button className="!p-1 !rounded-4 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !min-w-fit !w-[30px] !h-[30px]">
                      <Edit />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-4 px-6">
                  <div className="bg-secondary-400 dark:bg-surface-200 !h-10 !rounded-4 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit flex gap-2 items-center">
                    <VolumeHigh className="text-white" size="22" />
                    <span className="text-white text-xl font-normal leading-normal">
                      Notifications
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 px-5">
                    <Switch color="danger">
                      <span className="text-secondary-1000 dark:text-white text-base leading-6 font-normal font-inter">
                        Messenger
                      </span>
                    </Switch>
                    <Switch color="danger">
                      <span className="text-secondary-1000 dark:text-white text-base leading-6 font-normal font-inter">
                        SMS
                      </span>
                    </Switch>
                    <Switch color="danger">
                      <span className="text-secondary-1000 dark:text-white text-base leading-6 font-normal font-inter">
                        Email
                      </span>
                    </Switch>
                  </div>

                  <div className="bg-secondary-400 dark:bg-surface-200 !h-10 !rounded-4 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit flex gap-2 items-center">
                    <JobOffersIcon
                      props={{
                        color: "#fff",
                      }}
                    />
                    <span className="text-white text-xl font-normal leading-normal">
                      Offers
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Switch color="danger">
                      <span className="text-secondary-1000 dark:text-white text-base leading-6 font-normal font-inter">
                        Offer my resume to previous companies
                      </span>
                    </Switch>
                    <Switch color="danger">
                      <span className="text-secondary-1000 dark:text-white text-base leading-6 font-normal font-inter">
                        Offer resume to opportunities lower than my requested
                        salary
                      </span>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpen}
              size="3xl"
              onOpenChange={onOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <div className="flex flex-col gap-8">
                    <ModalHeader className="flex flex-col gap-1 !p-0">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <Lock className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Confirm Password
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
                      <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                          <div className="px-3 py-1.5 flex gap-2 items-center">
                            <MedalStar
                              className="text-secondary-400"
                              size="22"
                            />
                            <span className="text-secondary-400 text-xl font-normal leading-normal">
                              Rulls
                            </span>
                          </div>
                          <p className="text-secondary-900 text-base font-normal leading-normal">
                            To change your password, go to account settings and
                            select "Change Password." Enter your current
                            password, then create a new strong password. Confirm
                            the new password and save the changes to enhance
                            your account security.
                          </p>
                        </div>
                        <Form
                          className="w-full flex flex-col gap-6"
                          onSubmit={formik.handleSubmit}
                        >
                          <div className="grid grid-cols-2 gap-[52px] w-full">
                            <div className="col-span-1 flex flex-col gap-1">
                              <AppInput
                                props={{
                                  label: "Current password",
                                  required: true,
                                  error: formik.errors.oldPassa,
                                  name: "oldPass",
                                  placeholder:
                                    "Enter Your Current Password ...",
                                  type: "text",
                                  value: formik.values.oldPassa,
                                  formik: formik,
                                }}
                              />
                            </div>
                            <div className="col-span-1 flex flex-col gap-1">
                              <AppInput
                                props={{
                                  label: "New password",
                                  required: true,
                                  error: formik.errors.newpass,
                                  name: "newpass",
                                  placeholder: "Enter Your New Password ...",
                                  type: "text",
                                  value: formik.values.newpass,
                                  formik: formik,
                                }}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-[52px] w-full">
                            <div className="col-span-1 flex flex-col gap-1">
                              <AppInput
                                props={{
                                  label: "Repeat password",
                                  required: true,
                                  error: formik.errors.repeatPass,
                                  name: "repeatPass",
                                  placeholder: "Enter Your Repeat Password ...",
                                  type: "text",
                                  value: formik.values.repeatPass,
                                  formik: formik,
                                }}
                              />
                            </div>
                          </div>
                        </Form>
                      </div>
                    </ModalBody>
                    <ModalFooter className="!p-0">
                      <Button
                        className="text-base font-medium text-secondary-800 !min-w-fit !px-3 !py-1.5 !rounded-4"
                        color="default"
                        variant="light"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-secondary-400 dark:bg-surface-200 text-xl font-normal text-white !min-w-fit !px-3 !py-1.5 !rounded-4"
                        onPress={onClose}
                      >
                        Confirm
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
