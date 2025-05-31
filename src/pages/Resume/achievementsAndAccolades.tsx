import { Button } from "@heroui/button";
import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  Edit,
  ReceiveSquare,
  SearchNormal1,
  Trash,
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

import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { AppPagination } from "@/components/AppPagination.tsx";
import { AppGeneralDetails } from "@/components/AppGeneralDetails.tsx";
import { AppMap } from "@/components/AppMap.tsx";
import { CupStar } from "@/icons/cupStar.tsx";
import { AppInput } from "@/components/AppInput.tsx";
import { AppAutoComplete } from "@/components/AppAutoComplete.tsx";
import { CloseIcon } from "@/icons/closeIcon.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";

const achievementsAndAccolades = [
  {
    name: "Best Referee",
    title: "National Referee",
    date: "2023",
    description: "Adobe PhotoShop",
  },
  {
    name: "Champion",
    title: "National Referee",
    date: "2022",
    description: "UI/UX Design",
  },
  {
    name: "Coach",
    title: "National Referee",
    date: "2024",
    description: "Web Development",
  },
  {
    name: "Champion of 2015",
    title: "National Referee",
    date: "2023",
    description: "Adobe PhotoShop",
  },
  {
    name: "Champion of 2014",
    title: "National Referee",
    date: "2022",
    description: "UI/UX Design",
  },
  {
    name: "Best Referee",
    title: "National Referee",
    date: "2024",
    description: "Web Development",
  },
];

export default function ResumeAchievementsAccolades() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteConfirmOpen,
    onOpen: onDeleteConfirmOpen,
    onOpenChange: onDeleteConfirmOpenChange,
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
              <div className="flex">
                <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit mb-6">
                  <CupStar
                      props={{
                        color:"#fff"
                      }}
                  />
                  <span className="text-white text-xl font-normal">
                    Achievements and accolades
                  </span>
                </div>
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
            <div className="grid grid-cols-4 gap-3 h-[calc(100%-64px)]">
              <div className="col-span-3">
                <div className="flex flex-col h-full justify-between">
                  <div className="grid grid-cols-2 gap-3">
                    {achievementsAndAccolades.map((achievement, index) => (
                      <div
                        key={index}
                        className="rounded-5 shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1 p-4 bg-white dark:bg-info-1000"
                      >
                        <div className="flex flex-col gap-2.5">
                          <div className="flex flex-col gap-1.5 border-b-1 border-netural-100 pb-1.5">
                            <div className="flex justify-between">
                              <div className="flex gap-1.5">
                                <CupStar />
                                <span className="text-base font-semibold text-secondary-1000 dark:text-white">
                                  {achievement.name}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  className="!h-5 !w-5 !min-w-fit flex items-center gap-2 !p-1 !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1"
                                  variant="light"
                                  onPress={onOpen}
                                >
                                  <Edit
                                    className="text-secondary-1000 dark:text-white"
                                    size="14"
                                  />
                                </Button>
                                <Button
                                  className="!h-5 !w-5 !min-w-fit flex items-center gap-2 !p-1 !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1"
                                  variant="light"
                                  onPress={onDeleteConfirmOpen}
                                >
                                  <Trash
                                    className="text-secondary-1000 dark:text-white"
                                    size="14"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-4">
                                  <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-light">
                                    title:
                                  </span>
                                  <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-normal">
                                    {achievement.title}
                                  </span>
                                </div>
                                <div className="flex gap-4">
                                  <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-light">
                                    Date:
                                  </span>
                                  <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-normal">
                                    {achievement.date}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-light">
                                Description:
                              </span>
                              <span className="text-secondary-1000 dark:text-secondary-0 text-sm font-normal">
                                {achievement.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <AppPagination
                      props={{
                        total: 10,
                        size: "md",
                      }}
                    />
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
                        <div className="bg-secondary-400 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <CupStar />
                          <span className="text-white font-normal text-xl">
                            Edit Achievements and accolades
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
                        {/*<div className="flex gap-[52px] w-full">*/}
                        {/*  <div className="flex flex-col gap-1 w-1/2">*/}
                        {/*    <AppAutoComplete*/}
                        {/*      props={{*/}
                        {/*        label: "Title",*/}
                        {/*        required: true,*/}
                        {/*        error: formik.errors.firstname,*/}
                        {/*        name: "firstname",*/}
                        {/*        placeholder: "",*/}
                        {/*        type: "text",*/}
                        {/*        value: formik.values.firstname,*/}
                        {/*        formik: formik,*/}
                        {/*      }}*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*  <div className="flex flex-col gap-1 w-1/2">*/}
                        {/*    <AppInput*/}
                        {/*      props={{*/}
                        {/*        label: "last_name",*/}
                        {/*        required: true,*/}
                        {/*        error: formik.errors.firstname,*/}
                        {/*        name: "firstname",*/}
                        {/*        placeholder: "",*/}
                        {/*        type: "text",*/}
                        {/*        value: formik.values.firstname,*/}
                        {/*        formik: formik,*/}
                        {/*      }}*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*</div>*/}
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
            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isDeleteConfirmOpen}
              size="2xl"
              onOpenChange={onDeleteConfirmOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 dark:bg-[#01101a4d] shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <div className="flex flex-col gap-10">
                    <ModalHeader className="!p-0">
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
                    <ModalFooter className="!p-0">
                      <Button
                        className="text-secondary-800 dark:text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                        color="default"
                        variant="light"
                        onPress={onClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-danger text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                        onPress={() => {
                          console.log("Location deleted");
                          onClose();
                        }}
                      >
                        Delete
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
