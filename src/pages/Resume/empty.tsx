import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Button } from "@heroui/button";
import { Form } from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Personalcard } from "iconsax-react";

import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { AppButton } from "@/components/AppButton.tsx";
import EmptyResumeGif from "@/assets/img/empty-resume.gif";
import { AppInput } from "@/components/AppInput.tsx";

const ResumeEmpty = () => {
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
            <div className="grid grid-cols-4 h-full items-center bg-white shadow-shadow-light-tight/1 rounded-[14px]">
              <div />
              <div className="col-span-2">
                <span className="font-normal text-black block text-base">
                  Your resume has not yet been submitted.
                </span>
                <span className="font-normal text-black block text-base">
                  Please click the &#39;Create&#39; button to enter and complete
                  your resume.
                </span>
                <div className="text-center">
                  <AppButton
                    props={{
                      text: "Create Resume",
                      variant: "light",
                      onClick: onOpen,
                      className:
                        "text-black text-base font-semibold p-2 shadow-shadow-light-tight/1 rounded-4 mt-6",
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <Image src={EmptyResumeGif} />
                </div>
              </div>
              <div />
            </div>
            <Modal
              backdrop="blur"
              isOpen={isOpen}
              size="4xl"
              onOpenChange={onOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <div className="bg-secondary-400 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <Personalcard className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Add General Informations
                          </span>
                        </div>
                        <Button className="w-fit" variant="light">
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
                    <ModalBody>
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
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="text-xl font-normal"
                        color="default"
                        variant="light"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-secondary-400 text-xl font-normal text-white"
                        onPress={onClose}
                      >
                        Save Changes
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        ),
      }}
    />
  );
};

export default ResumeEmpty;
