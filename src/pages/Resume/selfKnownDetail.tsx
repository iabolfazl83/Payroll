import { Button } from "@heroui/button";
import {
  DocumentText,
  DollarCircle,
  Heart,
  HomeHashtag,
  Medal,
  Profile,
  Share,
} from "iconsax-react";

import { ResumeLayout } from "@/pages/Resume/Layout.tsx";
import { JobOffersIcon } from "@/icons/jobOffers.tsx";
import { TelegramIcon } from "@/icons/telegramIcon.tsx";
import { LinkedinIcon } from "@/icons/linkedinIcon.tsx";
import { InstagramIcon } from "@/icons/instagramIcon.tsx";
import { WhatssAppIcon } from "@/icons/whatssAppIcon.tsx";
import { AddIcon } from "@/icons/addIcon.tsx";
import SelfKnownImage from "@/assets/img/selfKnownImage.png";

export default function SelfKnownDetail() {
  return (
    <ResumeLayout
      props={{
        children: (
          <div className="mx-auto w-full flex flex-col gap-4 h-[calc(100%-132px)]">
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <Button className="flex items-center gap-2 !rounded-4 !bg-transparent !px-3 !py-1.5 w-fit">
                  <HomeHashtag className="text-secondary-400" size="22" />
                  <span className="text-secondary-400 text-xl font-normal">
                    General Info’s
                  </span>
                </Button>
                <Button className="flex items-center gap-2 !rounded-4 bg-secondary-400 dark:bg-surface-200 shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                  <JobOffersIcon
                    props={{
                      color: "#fff",
                    }}
                  />
                  <span className="text-white text-xl font-normal">
                    Job Offers
                  </span>
                </Button>
                <Button className="flex items-center gap-2 !rounded-4 !px-3 !py-1.5 w-fit !bg-transparent">
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
                <Button className="!rounded-4 !px-3 !py-1.5 w-fit !bg-white">
                  <span className="text-secondary-1000 text-xl font-normal">
                    Complete the job form
                  </span>
                </Button>
                <Button className="flex items-center gap-2 !rounded-4 bg-white shadow-shadow-light-tight/1 !px-3 !py-1.5 w-fit">
                  <Heart className="text-secondary-1000" size="22" />
                  <span className="text-secondary-1000 text-xl font-normal">
                    Favorites
                  </span>
                </Button>
                <div className="flex gap-3 bg-[#1E33630F] backdrop-blur-[20px] rounded-4">
                  <Button
                    className="!rounded-4 shadow-shadow-light-tight/1  dark:bg-secondary-1000 min-w-fit p-2  bg-secondary-400"
                    color="default"
                    isIconOnly={true}
                    variant="light"
                  >
                    <Share className="text-white" />
                  </Button>
                  <div className="flex gap-1.5">
                    <Button
                      className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                      color="default"
                      variant="light"
                    >
                      <TelegramIcon />
                    </Button>
                    <Button
                      className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                      color="default"
                      variant="light"
                    >
                      <LinkedinIcon />
                    </Button>
                    <Button
                      className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                      color="default"
                      variant="light"
                    >
                      <InstagramIcon />
                    </Button>
                    <Button
                      className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                      color="default"
                      variant="light"
                    >
                      <WhatssAppIcon />
                    </Button>
                    <Button
                      className="!rounded-4 shadow-shadow-light-tight/1 bg-white dark:bg-secondary-1000 min-w-fit p-2"
                      color="default"
                      variant="light"
                    >
                      <AddIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full bg-white rounded-[14px] shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1 p-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-6">
                    <img
                      alt=""
                      className="w-[200px] h-[200px] rounded-5"
                      src={SelfKnownImage}
                    />
                    <div className="flex flex-col gap-3 w-full">
                      <span className="text-secondary-400 text-xl font-semibold leading-normal">
                        The NEO Long Form Test
                      </span>
                      <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                        <div className="flex items-center gap-1.5">
                          <Profile
                            className="text-[#292D32] dark:text-white"
                            size="16"
                          />
                          <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                            Participants
                          </span>
                        </div>
                        <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                          153
                        </span>
                      </div>
                      <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                        <div className="flex items-center gap-1.5">
                          <DocumentText
                            className="text-[#292D32] dark:text-white"
                            size="16"
                          />
                          <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                            Questions
                          </span>
                        </div>
                        <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                          567
                        </span>
                      </div>
                      <div className="p-4 rounded-[8px] border border-[rgba(220,240,249,0.40)] bg-gradient-to-r from-[#FBF1EF] via-[#FCF8F8] via-50% via-[#F9F0F0] to-[#FCF4F3] backdrop-blur-[4px] flex justify-between dark:border-[rgba(4,66,92,0.40)] dark:bg-[linear-gradient(90deg,_#080E1C_0%,_#111D38_50%,_#080E1C_100%)]">
                        <div className="flex items-center gap-1.5">
                          <DollarCircle
                            className="text-[#292D32] dark:text-white"
                            size="16"
                          />
                          <span className="text-secondary-900 dark:text-white text-base font-light leading-normal">
                            Price
                          </span>
                        </div>
                        <span className="text-secondary-900 dark:text-white text-base font-semibold leading-normal">
                          750,000 Rials
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary-900 text-justify text-base font-normal leading-normal">
                    The result of the MMPI-2 test, along with its interpretation
                    and the corresponding graphs, will be provided after the
                    payment process is completed. Please note that if you
                    require a detailed interpretation, the test results should
                    be presented to psychology specialists who hold a master's
                    or doctoral degree in clinical psychology. The MMPI-2
                    psychological test consists of 567 questions. If you wish to
                    receive a quick and concise result, you can use the MMPI
                    short form, which contains 71 questions. The graphs
                    generated include clinical scales, Harris-Lingoes subscales,
                    content scales, and supplementary scales. To utilize this
                    test for self-awareness and personality assessment, you must
                    be at least 16 years old or have completed up to the eighth
                    grade. Some applications of the MMPI test include: In
                    judicial matters and the rehabilitation of offenders.
                  </p>
                </div>
                <div>
                  <p className="text-secondary-900 text-justify text-base font-normal leading-normal">
                    Assessing conditions such as Post-Traumatic Stress Disorder
                    (PTSD), clinical depression, and schizophrenia. Identifying
                    suitable candidates for social positions that impact
                    community health, such as nuclear energy workers, police
                    officers, airline pilots, and others. Evaluating psychiatric
                    patients and selecting appropriate treatment approaches.
                    During counseling sessions aimed at treating and managing
                    psychological and behavioral disorders, psychologists can
                    use the MMPI test to gain a deeper understanding of the
                    patient's personality, thereby enhancing the treatment
                    process. University counseling centers. Marriage and family
                    counseling. One of the best applications of the MMPI or
                    Minnesota test is in pre-marital counseling sessions. Here,
                    psychologists can use the MMPI personality test to gain a
                    good understanding of the couple's personalities, thereby
                    improving the marriage counseling process. Employment
                    organizations. Another significant application of the MMPI
                    test is in job interviews and employment tests. Employers
                    and company managers, especially in European countries where
                    the behavioral and personality traits of employees are
                    highly valued, often administer the MMPI test during job
                    interviews to understand the true personality of candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
