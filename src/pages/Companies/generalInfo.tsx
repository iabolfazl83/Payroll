import { Link } from "@heroui/react";
import {
  Building,
  CardAdd,
  CardTick,
  Heart,
  HomeHashtag,
  LampCharge,
  Link2,
  Medal,
  MedalStar,
  MoneyChange,
  People,
  Profile,
  Share,
  TagUser,
} from "iconsax-react";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

import { CompanyLayout } from "@/pages/Companies/Layout.tsx";
import { JobOffersIcon } from "@/icons/jobOffers.tsx";
import CompanyAvatar from "@/assets/img/company-avatar.png";
import AppStarRating from "@/components/AppStarRate.tsx";
import OurMissions from "@/assets/img/our-misssions.png";
import { useDarkMode } from "@/context/DarkMode.tsx";

export default function CompanyGeneralInfo() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const handleNavigateToJobOffers = () => {
    navigate("/job/offers");
  };
  const handleNavigateToEvents = () => {
    navigate("/company/events");
  };

  return (
    <CompanyLayout
      props={{
        children: (
          <div className="mx-auto w-full h-[calc(100%-132px)]">
            <div className="flex flex-col justify-between gap-3.5 h-full">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button className="flex items-center gap-2 !rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                    <HomeHashtag className="text-white" size="22" />
                    <span className="text-white text-xl font-normal">
                      General Info’s
                    </span>
                  </Button>
                  <Button
                    className="flex items-center gap-2 !rounded-4 !px-3 !py-1.5 w-fit !bg-transparent"
                    onPress={handleNavigateToJobOffers}
                  >
                    <JobOffersIcon
                      props={{
                        color: darkMode ? "#fff" : "#1E3363",
                      }}
                    />
                    <span className="text-secondary-400 dark:text-white text-xl font-normal">
                      Offers
                    </span>
                  </Button>
                  <Button
                    className="flex items-center gap-2 !rounded-4 !px-3 !py-1.5 w-fit !bg-transparent"
                    onPress={handleNavigateToEvents}
                  >
                    <Medal
                      className="text-secondary-400 dark:text-white"
                      size="22"
                    />
                    <span className="text-secondary-400 dark:text-white text-xl font-normal">
                      Events
                    </span>
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button className="!rounded-4 !px-3 !py-1.5 w-fit !bg-white dark:!bg-info-1000">
                    <span className="text-secondary-1000 dark:text-white text-xl font-normal">
                      Complete the job form
                    </span>
                  </Button>
                  <Button className="flex items-center gap-2 !rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                    <Heart className="text-white" size="22" />
                    <span className="text-white text-xl font-normal">
                      Favorites
                    </span>
                  </Button>
                  <Button
                    className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2 flex gap-2 border-1 border-secondary-400"
                    color="default"
                    variant="light"
                  >
                    <Share className="text-secondary-1000 dark:text-white" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="bg-white dark:bg-info-1000 rounded-[14px] shadow-shadow-light-tight/1 px-6 py-4">
                    <div className="flex flex-col gap-[36px]">
                      <div className="flex gap-6">
                        <img
                          alt=""
                          className="w-40 h-40 rounded-7 "
                          src={CompanyAvatar}
                        />
                        <div className="flex flex-col gap-3">
                          <span className="font-semibold text-xl text-secondary-400 dark:text-white leading-normal">
                            Nahira
                          </span>
                          <div className="flex gap-8">
                            <span className="text-secondary-400 dark:text-white font-semibold text-base">
                              Degital Solution
                            </span>
                            <span className="text-tertiar-400 font-normal text-base">
                              12 Followers
                            </span>
                          </div>
                          <AppStarRating rating={5} starColor="#FDD836" />
                          <Link className="flex gap-2.5" href="/">
                            <Link2 className="text-info" />
                            <span className="font-semibold text-base text-info">
                              Degital Solution
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-2 items-center">
                          <People
                            className="text-secondary-400 dark:text-white"
                            size="22"
                          />
                          <span className="text-xl font-normal text-secondary-400 dark:text-white">
                            About Us
                          </span>
                        </div>
                        <p className="text-secondary-900 dark:text-white font-normal text-base leading-normal">
                          The Eurostar Group was established in 1995 in Spain,
                          under the ownership and management of Mr. Ali Nakoonam
                          Sarouei. The company primarily focuses on building
                          mass housing and developing residential communities
                          using innovative industrial methods. They specialize
                          in a system known as modular aluminum panels with
                          in-situ concrete injection. Eurostar is the first
                          manufacturer of modular aluminum panels in Spain, with
                          all panels produced in their own factories. The
                          company employs skilled professionals throughout the
                          design and execution phases. A significant achievement
                          for Eurostar is the implementation of cutting-edge
                          technology in Iran, creating debris-free structures.
                          The company aims to expand its industrial and reliable
                          construction solutions in earthquake-prone countries,
                          promoting sustainable development and job creation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-info-1000 rounded-[14px] shadow-shadow-light-tight/1 px-6 py-4">
                    <div className="flex flex-col gap-6">
                      <div className="border-b-1 border-netural-100 dark:border-netural-700">
                        <div className="flex gap-7">
                          <img
                            alt="OurMissions"
                            className="w-[272px] h-[272px]"
                            src={OurMissions}
                          />
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <MedalStar size="22" />
                              <span className="text-secondary-400 dark:text-white text-xl">
                                Our Misions
                              </span>
                            </div>
                            <p className="text-base text-secondary-900 dark:text-white">
                              By promoting the use of small units and
                              collaborating with banks, applicants can acquire
                              housing without any initial investment, relying
                              solely on bank financing. If we can effectively
                              communicate the costs of maintenance and energy
                              savings to citizens, they will be encouraged to
                              settle for smaller units.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-secondary-900 font-semibold text-xl leading-normal">
                          Detailed Information
                        </span>
                        <div className="flex flex-col gap-3">
                          <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                            <div className="flex items-center gap-1.5">
                              <Building
                                className="text-[#292D32] dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                                Establishment
                              </span>
                            </div>
                            <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                              1400
                            </span>
                          </div>
                          <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                            <div className="flex items-center gap-1.5">
                              <Profile
                                className="text-[#292D32] dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                                No. Employees
                              </span>
                            </div>
                            <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                              120
                            </span>
                          </div>
                          <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                            <div className="flex items-center gap-1.5">
                              <LampCharge
                                className="text-[#292D32] dark:text-white"
                                size="16"
                              />
                              <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                                Advantages
                              </span>
                            </div>
                            <div className="flex gap-3">
                              <div className="flex items-center gap-1">
                                <TagUser size="16" />
                                <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                                  Insurance
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <CardAdd size="16" />
                                <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                                  Loan
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MoneyChange size="16" />
                                <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                                  Gym facilities
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <CardTick size="16" />
                                <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                                  Training programs
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
