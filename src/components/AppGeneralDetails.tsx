import { Button } from "@heroui/button";
import { Edit, Personalcard } from "iconsax-react";
import { Avatar, Form, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";

import AvatarUser from "@/assets/img/Avatar.jpg";
import { AppInput } from "@/components/AppInput.tsx";
import { AppTextArea } from "@/components/AppTextArea.tsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const AppGeneralDetails = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {t} = useTranslation()

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
    <div className="relative shadow-shadow-light-tight/1 rounded-[14px] p-4 h-3/5">
      <img
        alt=""
        className="w-full h-full absolute left-0 top-0 opacity-[0.2] blur rounded-[14px]"
        src={AvatarUser}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-secondary-400 dark:bg-surface-200 opacity-[0.2] rounded-[14px]" />
      <div
        className="absolute top-0 right-0 w-full h-full rounded-4 bg-[position:-59px_0px] blur-sm opacity-50"
        // style={{
        //   backgroundImage: `url(${AvatarUser})`,
        //   backgroundBlendMode: "lighten",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      />
      <div className="flex justify-between items-center border-b border-secondary-400  pb-2 mb-4">
        <span className="text-secondary-900 dark:text-white text-xl font-semibold leading-normal text-shadow-[0px_1px_3px_rgba(8,14,28,0.3)]">
          General Details
        </span>
        <Button
          className="w-[26px] h-[26px] min-w-fit !rounded-2 bg-white dark:bg-secondary-1000 shadow-shadow-light-tight/1 !p-0"
          variant="light"
          onPress={onOpen}
        >
          <Edit className="text-secondary-1000 dark:text-white" size="14" />
        </Button>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div />
          <div>
            <Avatar className="w-[70px] h-[70px]" src={AvatarUser} />
          </div>
          <div className="flex flex-col gap-1">
            <Button
              className="w-[26px] h-[26px] min-w-fit !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !p-0"
              variant="light"
            >
              <svg
                fill="none"
                height="10"
                viewBox="0 0 10 10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4519_16528)">
                  <path
                    d="M9.26953 1.28174C9.41426 1.24101 9.47709 1.27755 9.49121 1.29053C9.49764 1.29645 9.53668 1.33718 9.53125 1.4624L9.50781 1.61768L9.50684 1.62256L8.03906 8.49365C7.99292 8.69801 7.93077 8.72808 7.92871 8.729C7.92516 8.73057 7.86819 8.75135 7.70898 8.66846L5.5293 7.06104L5.31738 6.90479L5.12793 7.08643L4.15039 8.02002L4.27051 6.44385L8.28809 2.79346L8.29395 2.78857L8.29883 2.78369C8.35826 2.72426 8.45077 2.61244 8.45215 2.4585C8.45292 2.37087 8.42334 2.28488 8.36426 2.21631C8.30896 2.15223 8.24128 2.11842 8.1875 2.10107C8.08451 2.06793 7.98027 2.07679 7.90039 2.09521C7.85732 2.10517 7.81354 2.11971 7.77051 2.13818L7.64355 2.20557L2.65723 5.34717L0.594727 4.71826H0.595703C0.571628 4.71049 0.551907 4.70034 0.53418 4.69287C0.54343 4.6873 0.552614 4.68018 0.563477 4.67432L0.717773 4.60596L0.722656 4.604L9.26953 1.28174Z"
                    fill="#1E3363"
                    stroke="#1E3363"
                    strokeWidth="0.625"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4519_16528">
                    <rect fill="white" height="10" width="10" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <Button
              className="w-[26px] h-[26px] min-w-fit !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !p-0"
              variant="light"
            >
              <svg
                fill="none"
                height="10"
                viewBox="0 0 10 10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.50684 3.81982C6.82852 3.69364 7.20338 3.65045 7.55664 3.71045C7.90795 3.77012 8.22742 3.92896 8.45898 4.19775C8.68886 4.46471 8.85352 4.86492 8.85352 5.4458V8.43701H7.83301V6.01221C7.83296 5.53308 7.68913 5.14693 7.4375 4.88037C7.1861 4.61422 6.84878 4.49156 6.51562 4.50342C5.8382 4.52756 5.2208 5.09432 5.2207 6.01221V8.43701H4.2041V3.84619H5.22949L5.2207 4.22607L5.80664 4.3833C5.93589 4.14738 6.18345 3.94669 6.50684 3.81982ZM2.60352 3.84619V8.43701H1.5625V3.84619H2.60352ZM2.05859 1.56201C2.19658 1.56218 2.32923 1.61674 2.42676 1.71436C2.52438 1.81208 2.57917 1.94536 2.5791 2.0835C2.57897 2.18682 2.54768 2.28685 2.49121 2.37158L2.42578 2.45166C2.32809 2.5491 2.19561 2.60407 2.05762 2.604L1.95605 2.59326C1.88914 2.5799 1.8253 2.55401 1.76855 2.51611L1.68945 2.45068C1.59192 2.35297 1.53704 2.22059 1.53711 2.08252L1.54688 1.98096C1.56024 1.91393 1.58702 1.85027 1.625 1.79346L1.68945 1.71436C1.76275 1.64114 1.85593 1.59174 1.95605 1.57178L2.05859 1.56201Z"
                  fill="#1E3363"
                  stroke="#1E3363"
                  strokeWidth="0.625"
                />
              </svg>
            </Button>
            <Button
              className="w-[26px] h-[26px] min-w-fit !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !p-0"
              variant="light"
            >
              <svg
                fill="none"
                height="10"
                viewBox="0 0 10 10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.01367 3.75391C5.70197 3.75414 6.25977 4.31262 6.25977 5.00098C6.25953 5.68913 5.70183 6.24684 5.01367 6.24707C4.32532 6.24707 3.76683 5.68928 3.7666 5.00098C3.7666 4.31248 4.32517 3.75391 5.01367 3.75391Z"
                  stroke="#1E3363"
                  strokeWidth="0.625"
                />
                <path
                  d="M6.70666 0.833496H3.29269C1.93516 0.833496 0.833008 1.93565 0.833008 3.29317V6.68027C0.833008 8.06468 1.93516 9.16683 3.29269 9.16683H6.67978C8.06419 9.16683 9.16634 8.06468 9.16634 6.70715V3.29317C9.16634 1.93565 8.06419 0.833496 6.70666 0.833496ZM5.01312 7.04317C3.87064 7.04317 2.9701 6.11575 2.9701 5.00016C2.9701 3.88457 3.88408 2.95715 5.01312 2.95715C6.12871 2.95715 7.04269 3.88457 7.04269 5.00016C7.04269 6.11575 6.14215 7.04317 5.01312 7.04317ZM7.8357 3.14532C7.70129 3.29317 7.49967 3.37382 7.27118 3.37382C7.06957 3.37382 6.86795 3.29317 6.70666 3.14532C6.55881 2.99747 6.47817 2.8093 6.47817 2.58081C6.47817 2.35231 6.55881 2.17758 6.70666 2.01629C6.85451 1.855 7.04269 1.77436 7.27118 1.77436C7.47279 1.77436 7.68785 1.855 7.8357 2.00285C7.9701 2.17758 8.06419 2.3792 8.06419 2.59425C8.05075 2.8093 7.9701 2.99747 7.8357 3.14532Z"
                  fill="#1E3363"
                />
                <path
                  d="M7.28449 2.2583C7.10976 2.2583 6.96191 2.40615 6.96191 2.58088C6.96191 2.75561 7.10976 2.90346 7.28449 2.90346C7.45923 2.90346 7.60708 2.75561 7.60708 2.58088C7.60708 2.40615 7.47267 2.2583 7.28449 2.2583Z"
                  fill="#1E3363"
                />
              </svg>
            </Button>
            <Button
              className="w-[26px] h-[26px] min-w-fit !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 !p-0"
              variant="light"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-secondary-900 dark:text-white font-semibold">
              Eva Robinson
            </span>
            <span className="text-xs font-light text-secondary-900 dark:text-white">
              PO.Inc.Alabama Machinery & Supply.
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-secondary-900 dark:text-white text-sm font-semibold leading-normal">
              About Me
            </span>
            <p className="text-xs font-light text-secondary-1000 dark:text-white text-justify leading-normal">
              Dedicated and disciplined martial artist with 12 years of
              experience in Kung Fu. I have honed my skills through rigorous
              training and competition, achieving a deep understanding of
              martial arts techniques and philosophies. As a top national and
              provincial referee, I ensure fair play and uphold the integrity of
              the sport during competitions. Additionally, I serve as a coach,
              where I guide and mentor athletes.
            </p>
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
  );
};
