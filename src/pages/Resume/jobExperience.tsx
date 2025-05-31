import { Button } from "@heroui/button";
import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  FavoriteChart,
  Personalcard,
  ReceiveSquare,
  SearchNormal1,
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
import { useFormik } from "formik";
import * as Yup from "yup";

import { AppInput } from "@/components/AppInput.tsx";
import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { AppTextArea } from "@/components/AppTextArea.tsx";
import AppTable from "@/components/AppTable.tsx";
import { AppGeneralDetails } from "@/components/AppGeneralDetails.tsx";
import { AppMap } from "@/components/AppMap.tsx";

export default function ResumeInfo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenAddNewJobExperince,
    onOpen: onOpenNewJobExperience,
    onOpenChange: onOpenChangeNewJobExperince,
  } = useDisclosure();
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
            <div className="flex justify-between">
              <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit mb-6">
                <Personalcard className="text-white" size="22" />
                <span className="text-white text-xl font-normal">
                  Work Experience
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
                  isIconOnly
                  className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                  color="default"
                  variant="light"
                >
                  <SearchNormal1
                    className="text-secondary-1000 dark:text-white"
                    size="24"
                  />
                </Button>
                <Button
                  className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2 flex gap-2"
                  color="default"
                  variant="light"
                  onPress={onOpenNewJobExperience}
                >
                  <Add
                    className="text-secondary-1000 dark:text-white"
                    size="16"
                  />
                  <span className="text-secondary-1000 dark:text-white font-semibold text-base">
                    Add New One
                  </span>
                </Button>
                <Button
                  className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2 flex gap-2"
                  color="default"
                  variant="light"
                >
                  <ReceiveSquare
                    className="text-secondary-1000 dark:text-white"
                    size="16"
                  />
                  <span className="text-secondary-1000 dark:text-white font-semibold text-base">
                    Download Resume
                  </span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 h-[calc(100%-64px)]">
              <div className="col-span-3">
                <AppTable
                  props={{
                    columns: [
                      { key: "No.", label: "No." },
                      { key: "Title", label: "Title" },
                      { key: "CompanyName", label: "CompanyName" },
                      { key: "Timeline", label: "Timeline" },
                      { key: "Location", label: "Location" },
                    ],
                    data: [
                      {
                        "No.": 1,
                        Title: "Frontend Developer",
                        CompanyName: "Nahira",
                        Timeline: "2022-01-01",
                        Location: "Qazvin",
                      },
                      {
                        "No.": 2,
                        Title: "Backend Developer",
                        CompanyName: "Nahira",
                        Timeline: "2023-01-01",
                        Location: "Tehran",
                      },
                    ],
                    onOpenEditDialog: onOpen,
                  }}
                />
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
            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpen}
              size="4xl"
              onOpenChange={onOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 rounded-4 flex items-center gap-2 px-3 py-1.5 w-fit">
                          <FavoriteChart className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Edit Work Experience
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
                    <ModalBody>
                      <Form
                        className="w-full flex flex-col gap-6"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: "Title",
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
                                label: "Company Name",
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
                                label: "Start Date",
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
                                label: "Salary received",
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
                                label: "Industry",
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
                                label: "Quit Date",
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
                                label: "Upload portfolio",
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
                                label: "City",
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
                                label: "Address",
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
                                label: "Occupational group",
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
                                label: "Descriptions and Achievements",
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
                                label: "Type of cooperation",
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
                                label: "Resoins of Quit",
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
                        Cancle
                      </Button>
                      <Button
                        className="bg-secondary-400 dark:bg-surface-200 text-xl font-normal text-white"
                        onPress={onClose}
                      >
                        Save Changes
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpenAddNewJobExperince}
              size="4xl"
              onOpenChange={onOpenChangeNewJobExperince}
            >
              <ModalContent className="rounded-[12px] bg-white/30 dark:bg-[#01101a4d] shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <FavoriteChart className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Add New Work Experience
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
                    <ModalBody>
                      <Form
                        className="w-full flex flex-col gap-6"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="flex gap-14 w-full">
                          <div className="flex flex-col gap-1 w-1/2">
                            <AppInput
                              props={{
                                label: "Title",
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
                                label: "Company Name",
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
                                label: "Start Date",
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
                                label: "Salary received",
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
                                label: "Industry",
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
                                label: "Quit Date",
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
                                label: "Upload portfolio",
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
                                label: "City",
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
                                label: "Address",
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
                                label: "Occupational group",
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
                                label: "Descriptions and Achievements",
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
                                label: "Type of cooperation",
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
                                label: "Resoins of Quit",
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
                        Cancle
                      </Button>
                      <Button
                        className="bg-secondary-400 dark:bg-surface-200 text-xl font-normal text-white"
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
}
