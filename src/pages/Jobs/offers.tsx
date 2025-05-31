import {
  Buildings2,
  Clock,
  Dislike,
  DollarCircle,
  Like1,
  Location,
  SearchNormal1,
  Setting4,
  Status,
} from "iconsax-react";
import { Button } from "@heroui/button";
import {
  Autocomplete,
  AutocompleteItem,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Slider,
  useDisclosure,
} from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { JobsLayout } from "@/pages/Jobs/Layout.tsx";
import AppStarRating from "@/components/AppStarRate.tsx";
import jobCompanyLogo from "@/assets/img/job-company-logo.png";
import { AppPagination } from "@/components/AppPagination.tsx";
import { JobOffersIcon } from "@/icons/jobOffers.tsx";
import { JobOppertunitiesIcon } from "@/icons/jobOppertunities.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";
import { AppInput } from "@/components/AppInput.tsx";

const jobs = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  company: "Nahira",
  title: "User Research Designer",
  location: "Karaj",
  type: "Full-time",
  salary: "20 ML",
  status: "Under review",
  rating: 1,
}));

const locations = Array.from({ length: 9 }, (_, i) => ({
  key: i + 1,
  label: "City" + i,
}));

export default function JobOffers() {
  const [value, setValue] = useState<any>([100, 300]);
  const { darkMode } = useDarkMode();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigateToJobOppertunities = () => {
    navigate("/job/oppertunities");
  };

  const handleOpenJobDetails = (name: string) => {
    navigate("/job/detail/" + name);
  };
  const formik = useFormik({
    initialValues: {
      search_sth: "",
    },
    validationSchema: Yup.object({
      search_sth: Yup.string().required(),
    }),
    onSubmit: () => {},
  });

  // useEffect(()=>{
  //   dispatch(handleGetJobOffers())
  // },[])
  return (
    <JobsLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex flex-col justify-between gap-3.5 h-full">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button className="flex items-center gap-2 !rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                    <JobOffersIcon
                      props={{
                        color: "#fff",
                      }}
                    />
                    <span className="text-white text-xl font-normal">
                      Job Recommendations
                    </span>
                  </Button>
                  <Button
                    className="flex items-center gap-2 !rounded-4 !px-3 !py-1.5 w-fit !bg-transparent"
                    onPress={handleNavigateToJobOppertunities}
                  >
                    <JobOppertunitiesIcon
                      props={{
                        color: darkMode ? "#fff" : "#1e3363",
                      }}
                    />
                    <span className="text-secondary-400 dark:text-white text-xl font-normal">
                      Job Opportunities
                    </span>
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Input
                    classNames={{
                      inputWrapper:
                        "!bg-white dark:!bg-secondary-1000 w-[300px] p-1.5 !shadow-shadow-light-tight/1 !rounded-4",
                    }}
                    placeholder="Search Sth"
                    startContent={
                      <SearchNormal1
                        className="text-secondary-1000 dark:text-white"
                        size="22"
                      />
                    }
                    type="text"
                  />
                  <Button
                    className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2 flex gap-2"
                    color="default"
                    variant="light"
                    onPress={onOpen}
                  >
                    <Setting4 className="text-secondary-1000 dark:text-white" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-3 gap-3">
                  {jobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => handleOpenJobDetails(job.company)}
                    >
                      <div
                        className="rounded-5 shadow-shadow-light-tight/1 px-3 py-4"
                        style={{
                          backgroundColor: darkMode ? "#01101A" : "#FFF5F0",
                          backgroundImage: `url(${jobCompanyLogo})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundBlendMode: darkMode ? "darken" : "lighten",
                        }}
                      >
                        <div className="flex justify-between pb-1 border-b-1 border-netural-100 dark:border-netural-700">
                          <div className="flex items-center gap-2">
                            <Buildings2
                              className="text-secondary-400 dark:text-white"
                              size="22"
                            />
                            <span className="text-secondary-1000 dark:text-white font-semibold">
                              {job.company}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              className="!h-[22px] !w-[54px] !min-w-fit flex items-center gap-2 !px-1 !py-0.5 !rounded-2 bg-white dark:bg-info-1000"
                              variant="light"
                            >
                              <span className="text-secondary-1000 dark:text-white text-[10px] font-normal">
                                Dislike
                              </span>
                              <Dislike
                                className="text-secondary-1000 dark:text-white"
                                size="12"
                                variant="Bold"
                              />
                            </Button>
                            <Button
                              className="!h-[22px] !w-[54px] !min-w-fit flex items-center gap-2 !px-1 !py-0.5 !rounded-2 bg-white dark:bg-info-1000"
                              variant="light"
                            >
                              <span className="text-secondary-1000 dark:text-white text-[10px] font-normal">
                                Like
                              </span>
                              <Like1
                                className="text-secondary-1000 dark:text-white"
                                size="12"
                                variant="Bold"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="flex flex-col gap-1">
                            <span className="text-secondary-800 dark:text-white font-bold text-sm leading-normal">
                              {job.title}
                            </span>
                            <div className="flex items-center gap-2">
                              <Location
                                className="text-secondary-1000 dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                {job.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock
                                className="text-secondary-1000 dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                {job.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarCircle
                                className="text-secondary-1000 dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                                {job.salary}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Status
                                className="text-info"
                                size="20"
                                variant="Bold"
                              />
                              <span className="text-info-700 dark:text-white text-sm font-normal">
                                {job.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <AppStarRating
                              rating={job.rating}
                              starColor="#FDD836"
                            />
                            <div className="flex justify-end">
                              <img
                                alt=""
                                className="w-[84px] h-[84px] rounded-5"
                                src={jobCompanyLogo}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-center">
                  <AppPagination
                    props={{
                      size: "sm",
                      total: "100",
                    }}
                  />
                </div>
              </div>
            </div>
            <Modal
              hideCloseButton
              backdrop="blur"
              isOpen={isOpen}
              size="lg"
              onOpenChange={onOpenChange}
            >
              <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <div className="bg-secondary-400 shadow-shadow-light-tight/1 rounded-4 flex gap-2 px-3 py-1.5 w-fit">
                          <Setting4 className="text-white" size="22" />
                          <span className="text-white font-normal text-xl">
                            Filter
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
                        <div className="w-full">
                          <AppInput
                            props={{
                              label: "Describe text",
                              required: true,
                              startContent: <SearchNormal1 />,
                              error: formik.errors.search_sth,
                              name: "Search Sth",
                              placeholder: "",
                              type: "text",
                              value: formik.values.search_sth,
                              formik: formik,
                            }}
                          />
                        </div>
                        <div>
                          <Autocomplete
                            className="max-w-xs"
                          >
                            {locations.map((location: any) => (
                              <AutocompleteItem key={location.key}>
                                {location.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div>
                          <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
                            <Slider
                              className="max-w-md"
                              formatOptions={{
                                style: "currency",
                                currency: "IRR",
                              }}
                              label=" "
                              maxValue={30000000}
                              minValue={18000000}
                              step={10}
                              value={value}
                              onChange={(val) => {
                                if (Array.isArray(val)) {
                                  setValue(val);
                                }
                              }}
                            />
                            <p className="text-default-500 font-medium text-small">
                              {Array.isArray(value) &&
                                value.map((b) => `${b}`).join(" – ")}
                            </p>
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
}
