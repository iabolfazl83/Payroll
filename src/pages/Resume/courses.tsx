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
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { AppPagination } from "@/components/AppPagination.tsx";
import { AppGeneralDetails } from "@/components/AppGeneralDetails.tsx";
import { Academy } from "@/icons/academy.tsx";
import { AppMap } from "@/components/AppMap.tsx";
import { CloseIcon } from "@/icons/closeIcon.tsx";

const courses = [
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

export default function ResumeCourses() {
  const {
    isOpen: isDeleteConfirmOpen,
    onOpen: onDeleteConfirmOpen,
    onOpenChange: onDeleteConfirmOpenChange,
  } = useDisclosure();

  return (
    <ResumeLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex justify-between">
              <div className="flex">
                <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 px-3 py-1.5 w-fit mb-6">
                  <Academy />
                  <span className="text-white text-xl font-normal">
                    Courses
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
                    {courses.map((course: any, index: number) => (
                      <div
                        key={index}
                        className="rounded-5 shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1 p-4 bg-white dark:bg-info-1000"
                      >
                        <div className="flex flex-col gap-2.5">
                          <div className="flex flex-col gap-1.5 border-b-1 border-netural-100 pb-1.5">
                            <div className="flex justify-between">
                              <div className="flex gap-1.5">
                                <Academy />
                                <span className="text-base font-semibold text-secondary-1000 dark:text-white">
                                  {course.name}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  className="!h-5 !w-5 !min-w-fit flex items-center gap-2 !p-1 !rounded-2 bg-white dark:bg-info-1000 shadow-shadow-light-tight/1"
                                  variant="light"
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
                                  <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                    title:
                                  </span>
                                  <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                    {course.title}
                                  </span>
                                </div>
                                <div className="flex gap-4">
                                  <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                    Date:
                                  </span>
                                  <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                    {course.date}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                Description:
                              </span>
                              <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                {course.description}
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
