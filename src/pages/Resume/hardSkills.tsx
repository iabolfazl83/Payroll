import { Button } from "@heroui/button";
import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  Edit,
  LampCharge,
  ReceiveSquare,
  SearchNormal1,
  Star,
  Trash,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import {
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";
import DoubleLineProgress from "@/components/AppCircularChart.tsx";
import { AppGeneralDetails } from "@/components/AppGeneralDetails.tsx";
import { AppMap } from "@/components/AppMap.tsx";
import HardSkillsAvatar from "@/assets/img/hard-skills-avatar.png";
import { AppPagination } from "@/components/AppPagination.tsx";
import { ChevronDownIcon } from "@/icons/chevronDown.tsx";
import { CloseIcon } from "@/icons/closeIcon.tsx";

const hardSkillsData = [
  {
    name: "Adobe AI",
    level: "A",
    grade: 87,
    year: "2023",
    description: "Adobe PhotoShop",
    avatar: HardSkillsAvatar,
  },
  {
    name: "Figma",
    level: "B",
    grade: 76,
    year: "2022",
    description: "UI/UX Design",
    avatar: HardSkillsAvatar,
  },
  {
    name: "JavaScript",
    level: "A+",
    grade: 92,
    year: "2024",
    description: "Web Development",
    avatar: HardSkillsAvatar,
  },
  {
    name: "Adobe AI",
    level: "A",
    grade: 87,
    year: "2023",
    description: "Adobe PhotoShop",
    avatar: HardSkillsAvatar,
  },
  {
    name: "Figma",
    level: "B",
    grade: 76,
    year: "2022",
    description: "UI/UX Design",
    avatar: HardSkillsAvatar,
  },
  {
    name: "JavaScript",
    level: "A+",
    grade: 92,
    year: "2024",
    description: "Web Development",
    avatar: HardSkillsAvatar,
  },
  {
    name: "Adobe AI",
    level: "A",
    grade: 87,
    year: "2023",
    description: "Adobe PhotoShop",
    avatar: HardSkillsAvatar,
  },
  {
    name: "Figma",
    level: "B",
    grade: 76,
    year: "2022",
    description: "UI/UX Design",
    avatar: HardSkillsAvatar,
  },
  {
    name: "JavaScript",
    level: "A+",
    grade: 92,
    year: "2024",
    description: "Web Development",
    avatar: HardSkillsAvatar,
  },
];

export default function ResumeHardSkills() {
  const { darkMode } = useDarkMode();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenHardSkills,
    onOpen: onOpenHardSkills,
    onOpenChange: onOpenChangeHardSkills,
  } = useDisclosure();
  const navigate = useNavigate();
  const [isOpenSkills, setIsOpenSkills] = useState<boolean>(false);
  const [isOpenIndustrial, setIsOpenIndustrial] = useState<boolean>(false);
  const [isOpenField, setIsOpenField] = useState<boolean>(false);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedIndustrial, setSelectedIndustrial] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState<string>("");

  const skillsData: any = {
    Industrial: ["Manufacturing", "Construction", "Automotive"],
    "Natural resource jobs": ["Agriculture", "Forestry", "Fishing"],
    Languages: ["English", "French", "German"],
    Office: ["Administration", "Accounting", "HR"],
    Healthcare: ["Nursing", "Pharmacy", "Dentistry"],
    Engineering: ["Civil", "Mechanical", "Electrical"],
    Technology: ["Programming", "Data Science", "Cybersecurity"],
    Education: ["Teaching", "Research", "Training"],
  };

  const toggleSkills = () => setIsOpenSkills((prev) => !prev);
  const toggleIndustrial = () => setIsOpenIndustrial((prev) => !prev);
  const toggleField = () => setIsOpenField((prev) => !prev);

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSelectedIndustrial([]);
    setSelectedField("");
  };

  const handleIndustrialSelect = (industrial: string) => {
    if (selectedIndustrial.includes(industrial)) {
      setSelectedIndustrial(selectedIndustrial.filter((i) => i !== industrial));
    } else {
      setSelectedIndustrial([...selectedIndustrial, industrial]);
    }
  };

  const handleFieldSelect = (field: string) => {
    setSelectedField(field);
    setIsOpenField(false);
  };

  const availableIndustrials = selectedSkills.flatMap(
    (skill: any) => skillsData[skill as any] || [],
  );

  const availableFields = selectedIndustrial;

  const handleNavigateToSoftSkills = () => {
    navigate("/resume/soft-skills");
  };

  return (
    <ResumeLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex flex-col gap-[14px] h-full">
              <div className="flex justify-between">
                <div className="flex">
                  <Button className="flex items-center gap-2 !rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                    <LampCharge className="text-white" size="22" />
                    <span className="text-white text-xl font-normal">
                      Hard Skills
                    </span>
                  </Button>
                  <Button
                    className="flex items-center gap-2 !rounded-4 !bg-transparent !px-3 !py-1.5 w-fit"
                    onPress={handleNavigateToSoftSkills}
                  >
                    <Star
                      className="text-secondary-400 dark:text-secondary-0"
                      size="22"
                    />
                    <span className="text-secondary-400 dark:text-secondary-0 text-xl font-normal">
                      Soft Skills
                    </span>
                  </Button>
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
                    onPress={onOpen}
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
                    <div className="grid grid-cols-3 gap-3">
                      {hardSkillsData.map((skill, index) => (
                        <div
                          key={index}
                          className="rounded-5 shadow-shadow-light-tight/1 p-4"
                          style={{
                            backgroundColor: darkMode ? "#01101A" : "#FFF5F0",
                            backgroundImage: `url(${skill.avatar})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: darkMode
                              ? "darken"
                              : "lighten",
                          }}
                        >
                          <div className="flex flex-col gap-2.5">
                            <div className="flex flex-col gap-1.5">
                              <div className="flex justify-between">
                                <div className="flex gap-1.5">
                                  <img
                                    alt=""
                                    className="rounded-2"
                                    src={skill.avatar}
                                  />
                                  <span className="text-base font-semibold text-secondary-1000">
                                    {skill.name}
                                  </span>
                                </div>
                                <div className="flex gap-1">
                                  <Button
                                    className="!h-5 !w-5 !min-w-fit flex items-center gap-2 !p-1 !rounded-2 bg-white dark:bg-info-1000"
                                    variant="light"
                                    onPress={onOpenHardSkills}
                                  >
                                    <Edit
                                      className="text-secondary-1000 dark:text-white"
                                      size="14"
                                    />
                                  </Button>
                                  <Button
                                    className="!h-5 !w-5 !min-w-fit flex items-center gap-2 !p-1 !rounded-2 bg-white dark:bg-info-1000"
                                    variant="light"
                                    onPress={onOpenDelete}
                                  >
                                    <Trash
                                      className="text-secondary-1000 dark:text-white"
                                      size="14"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="bg-[#f6f6f666] h-[1px] w-full shadow-shadow-light-tight/1" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-4">
                                    <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                      Level:
                                    </span>
                                    <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                      {skill.level}
                                    </span>
                                  </div>
                                  <div className="flex gap-4">
                                    <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                      Grad:
                                    </span>
                                    <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                      {skill.grade}%
                                    </span>
                                  </div>
                                  <div className="flex gap-4">
                                    <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                      Date:
                                    </span>
                                    <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                      {skill.year}
                                    </span>
                                  </div>
                                </div>
                                <div style={{ zoom: "0.7" }}>
                                  <DoubleLineProgress
                                    gradientEnd="#DFF3E7"
                                    gradientStart="#22AD5C"
                                    value={skill.grade}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-4">
                                <span className="text-secondary-1000 dark:text-white text-sm font-light">
                                  Description:
                                </span>
                                <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                  {skill.description}
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
                  <div className="flex flex-col gap-8">
                    <ModalHeader className="flex flex-col gap-1 !p-0">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <LampCharge />
                          <span className="text-white font-normal text-xl">
                            Add New Hard Skills
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
                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Skills*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          style={{
                            height: isOpenSkills ? 300 : 50,
                          }}
                          onClick={toggleSkills}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedSkills.length > 0 ? (
                              selectedSkills.map((skill) => (
                                <Chip
                                  key={skill}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSkillSelect(skill);
                                  }}
                                >
                                  {skill}
                                </Chip>
                              ))
                            ) : (
                              <span className="text-secondary-400">
                                Select skills...
                              </span>
                            )}

                            {isOpenSkills &&
                              Object.keys(skillsData).map(
                                (skill) =>
                                  !selectedSkills.includes(skill) && (
                                    <Chip
                                      key={skill}
                                      className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSkillSelect(skill);
                                      }}
                                    >
                                      {skill}
                                    </Chip>
                                  ),
                              )}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenSkills ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Industrial*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          disabled={selectedSkills.length === 0}
                          style={{
                            height: isOpenIndustrial ? 300 : 50,
                          }}
                          onClick={toggleIndustrial}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedIndustrial.length > 0 ? (
                              selectedIndustrial.map((industrial) => (
                                <Chip
                                  key={industrial}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleIndustrialSelect(industrial);
                                  }}
                                >
                                  {industrial}
                                </Chip>
                              ))
                            ) : (
                              <span className="text-secondary-400">
                                {selectedSkills.length === 0
                                  ? "Select skills first"
                                  : "Select industrial..."}
                              </span>
                            )}

                            {isOpenIndustrial &&
                              availableIndustrials.map(
                                (industrial) =>
                                  !selectedIndustrial.includes(industrial) && (
                                    <Chip
                                      key={industrial}
                                      className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIndustrialSelect(industrial);
                                      }}
                                    >
                                      {industrial}
                                    </Chip>
                                  ),
                              )}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenIndustrial ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Field*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          disabled={selectedIndustrial.length === 0}
                          style={{
                            height: isOpenField ? 300 : 50,
                          }}
                          onClick={toggleField}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedField ? (
                              <Chip className="!bg-[#dee1eb66] text-secondary-700">
                                {selectedField}
                              </Chip>
                            ) : (
                              <span className="text-secondary-400">
                                {selectedIndustrial.length === 0
                                  ? "Select industrial first"
                                  : "Select field..."}
                              </span>
                            )}

                            {isOpenField &&
                              availableFields.map((field) => (
                                <Chip
                                  key={field}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleFieldSelect(field);
                                  }}
                                >
                                  {field}
                                </Chip>
                              ))}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenField ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
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
                        Submit
                      </Button>
                    </ModalFooter>
                  </div>
                )}
              </ModalContent>
            </Modal>

            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpenHardSkills}
              size="4xl"
              onOpenChange={onOpenChangeHardSkills}
            >
              <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <div className="flex flex-col gap-8">
                    <ModalHeader className="flex flex-col gap-1 !p-0">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <LampCharge />
                          <span className="text-white font-normal text-xl">
                            Add New Hard Skills
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
                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Skills*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          style={{
                            height: isOpenSkills ? 300 : 50,
                          }}
                          onClick={toggleSkills}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedSkills.length > 0 ? (
                              selectedSkills.map((skill) => (
                                <Chip
                                  key={skill}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSkillSelect(skill);
                                  }}
                                >
                                  {skill}
                                </Chip>
                              ))
                            ) : (
                              <span className="text-secondary-400">
                                Select skills...
                              </span>
                            )}

                            {isOpenSkills &&
                              Object.keys(skillsData).map(
                                (skill) =>
                                  !selectedSkills.includes(skill) && (
                                    <Chip
                                      key={skill}
                                      className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSkillSelect(skill);
                                      }}
                                    >
                                      {skill}
                                    </Chip>
                                  ),
                              )}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenSkills ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Industrial*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          disabled={selectedSkills.length === 0}
                          style={{
                            height: isOpenIndustrial ? 300 : 50,
                          }}
                          onClick={toggleIndustrial}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedIndustrial.length > 0 ? (
                              selectedIndustrial.map((industrial) => (
                                <Chip
                                  key={industrial}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleIndustrialSelect(industrial);
                                  }}
                                >
                                  {industrial}
                                </Chip>
                              ))
                            ) : (
                              <span className="text-secondary-400">
                                {selectedSkills.length === 0
                                  ? "Select skills first"
                                  : "Select industrial..."}
                              </span>
                            )}

                            {isOpenIndustrial &&
                              availableIndustrials.map(
                                (industrial) =>
                                  !selectedIndustrial.includes(industrial) && (
                                    <Chip
                                      key={industrial}
                                      className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIndustrialSelect(industrial);
                                      }}
                                    >
                                      {industrial}
                                    </Chip>
                                  ),
                              )}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenIndustrial ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-secondary-1000 font-inter">
                          Field*
                        </span>
                        <button
                          className="rounded-5 border-1 bg-white border-secondary-0 p-2.5 flex justify-between items-center transition-all duration-300 overflow-hidden w-full"
                          disabled={selectedIndustrial.length === 0}
                          style={{
                            height: isOpenField ? 300 : 50,
                          }}
                          onClick={toggleField}
                        >
                          <div className="flex gap-4 flex-wrap">
                            {selectedField ? (
                              <Chip className="!bg-[#dee1eb66] text-secondary-700">
                                {selectedField}
                              </Chip>
                            ) : (
                              <span className="text-secondary-400">
                                {selectedIndustrial.length === 0
                                  ? "Select industrial first"
                                  : "Select field..."}
                              </span>
                            )}

                            {isOpenField &&
                              availableFields.map((field) => (
                                <Chip
                                  key={field}
                                  className="!bg-[#dee1eb66] text-secondary-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleFieldSelect(field);
                                  }}
                                >
                                  {field}
                                </Chip>
                              ))}
                          </div>
                          <div className="flex justify-end mt-2">
                            <div
                              className={`w-5 h-5 transition-transform duration-300 ${isOpenField ? "rotate-180" : "rotate-0"}`}
                            >
                              <ChevronDownIcon />
                            </div>
                          </div>
                        </button>
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
                        Submit
                      </Button>
                    </ModalFooter>
                  </div>
                )}
              </ModalContent>
            </Modal>

            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpenDelete}
              size="2xl"
              onOpenChange={onOpenChangeDelete}
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
                          console.log("Location deleted");
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
        ),
      }}
    />
  );
}
