import { Input } from "@heroui/react";
import {
  Buildings2,
  Clock,
  DocumentForward,
  DollarCircle,
  Location,
  SearchNormal1,
  Setting4,
  Status,
} from "iconsax-react";
import { Button } from "@heroui/button";

import { JobsLayout } from "@/pages/Jobs/Layout.tsx";
import { JobOffersIcon } from "@/icons/jobOffers.tsx";
import { JobOppertunitiesIcon } from "@/icons/jobOppertunities.tsx";
import jobCompanyLogo from "@/assets/img/job-company-logo.png";
import AppStarRating from "@/components/AppStarRate.tsx";
import { AppPagination } from "@/components/AppPagination.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";
import { useNavigate } from "react-router-dom";

const oppertunities = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  company: "Nahira",
  title: "User Research Designer",
  location: "Karaj",
  type: "Full-time",
  salary: "20 ML",
  status: "Under review",
  rating: 1,
}));

export default function JobOppertunities() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleNavigateToJobOffers = () => {
    navigate("/job/offers");
  };
  return (
    <JobsLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex flex-col justify-between gap-3.5 h-full">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button
                    className="flex items-center gap-2 !bg-transparent !rounded-4 !px-3 !py-1.5 w-fit"
                    onPress={handleNavigateToJobOffers}>
                    <JobOffersIcon
                      props={{
                        color: darkMode ? "#fff" : "#1e3363",
                      }}
                    />
                    <span className="dark:text-white text-secondary-400 text-xl font-normal">
                      Job Recommendations
                    </span>
                  </Button>
                  <Button className="flex items-center gap-2 bg-secondary-400 dark:bg-surface-200 !rounded-4 !px-3 !py-1.5 w-fit">
                    <JobOppertunitiesIcon
                      props={{
                        color:"#fff"
                      }}
                    />
                    <span className="text-white text-xl font-normal">
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
                  >
                    <Setting4 className="text-secondary-1000 dark:text-white" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-3 gap-3">
                  {oppertunities.map((oppertunitie: any) => (
                    <div
                      key={oppertunitie.id}
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
                            {oppertunitie.company}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            className="!h-[22px] !w-[54px] !min-w-fit flex items-center gap-2 !px-1 !py-0.5 !rounded-2 bg-white dark:bg-info-1000"
                            variant="light"
                          >
                            <span className="text-secondary-1000 dark:text-white text-[10px] font-normal">
                              Easy Apply
                            </span>
                            <DocumentForward
                              className="text-secondary-1000 dark:text-white"
                              size="12"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-secondary-800 dark:text-white font-bold text-sm leading-normal">
                            {oppertunitie.title}
                          </span>
                          <div className="flex items-center gap-2">
                            <Location
                              className="text-secondary-1000 dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                              {oppertunitie.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock
                              className="text-secondary-1000 dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                              {oppertunitie.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarCircle
                              className="text-secondary-1000 dark:text-white"
                              size="16"
                            />
                            <span className="text-secondary-1000 dark:text-white text-sm font-normal">
                              {oppertunitie.salary}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Status
                              className="text-info"
                              size="20"
                              variant="Bold"
                            />
                            <span className="text-info-700 dark:text-white text-sm font-normal">
                              {oppertunitie.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <AppStarRating
                            rating={oppertunitie.rating}
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
          </div>
        ),
      }}
    />
  );
}
