import { Moon, Notification, Play, SmsNotification } from "iconsax-react";
import { Button, Avatar, Tabs, Tab } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "@/icons/Logo.tsx";
import { useDarkMode } from "@/context/DarkMode";
import AvatarUser from "@/assets/img/Avatar.jpg";

const AppHeader = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedTab = () => {
    const path = location.pathname;

    if (path.startsWith("/dashboard")) return "/dashboard";
    if (path.startsWith("/resume")) return "/resume/info";
    if (path.startsWith("/job")) return "/job/offers";
    if (path.startsWith("/company")) return "/company/all-companies";

    return "";
  };

  return (
    <div className="flex items-center justify-between pb-8 pt-4 gap-10">
      <button className="items-center" onClick={() => navigate("/dashboard")}>
        <Logo />
      </button>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 justify-end">
            <div className="flex gap-2">
              <div className="flex w-full flex-col">
                <Tabs
                  aria-label="Options"
                  classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 mb-[-2px]",
                    cursor: "w-full bg-secondary-400 dark:bg-white h-[2px]",
                    tab: "max-w-fit px-7",
                    tabContent:
                      "group-data-[selected=true]:text-secondary-400 dark:text-secondary-0 dark:group-data-[selected=true]:text-white group-data-[selected=true]:font-bold text-sm",
                  }}
                  selectedKey={getSelectedTab()}
                  variant="underlined"
                  onSelectionChange={(key) => navigate(key.toString())}
                >
                  <Tab key="/dashboard" title={<span>{t("dashboard")}</span>} />
                  <Tab key="/resume/info" title={<span>{t("resume")}</span>} />
                  <Tab key="/job/offers" title={<span>{t("jobs")}</span>} />
                  <Tab
                    key="/company/all-companies"
                    title={<span>{t("company")}</span>}
                  />
                </Tabs>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            <div className="flex gap-2">
              <Button
                isIconOnly
                className="bg-white dark:bg-info-1000 !rounded-4 p-2 shadow-[0px_1px_3px_0px_rgba(8,14,28,0.30)]"
                variant="light"
              >
                <Play
                  className="text-secondary-1000 dark:text-white"
                  size="24"
                />
              </Button>
              <Button
                className="bg-white dark:bg-info-1000 !rounded-4 p-2 shadow-[0px_1px_3px_0px_rgba(8,14,28,0.30)]"
                variant="light"
              >
                <span className="text-secondary-1000 dark:text-white font-semibold">
                  {t("ed_tour")}
                </span>
              </Button>
              <Button
                className="bg-white dark:bg-info-1000 !rounded-4 p-2 shadow-[0px_1px_3px_0px_rgba(8,14,28,0.30)]"
                variant="light"
              >
                <span className="text-secondary-1000 dark:text-white font-semibold">
                  {t("upgrate")}
                </span>
              </Button>
            </div>

            <div className="flex gap-1">
              <Button
                isIconOnly
                variant="light"
                onPress={() => toggleDarkMode()}
              >
                <Moon
                  className="text-secondary-1000 dark:text-white"
                  size="20"
                  variant={darkMode ? "Bold" : "Outline"}
                />
              </Button>
              <Button isIconOnly variant="light">
                <Notification
                  className="text-secondary-1000 dark:text-white"
                  size="20"
                />
              </Button>
              <Button isIconOnly variant="light">
                <SmsNotification
                  className="text-secondary-1000 dark:text-white"
                  size="20"
                />
              </Button>
            </div>
            <div>
              <Avatar radius="sm" src={AvatarUser} />
            </div>
          </div>
        </div>
        <div className="bg-[#f6f6f666] dark:bg-[#33333366] h-[1px] w-full shadow-shadow-light-tight/1" />
      </div>
    </div>
  );
};

export default AppHeader;
