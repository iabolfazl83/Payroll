import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "@heroui/react";

import { SettingLayout } from "@/pages/Setting/Layout.tsx";
import PageIndexTabs from "@/pages/Setting/PageIndexTabs.tsx";
import InitialSettings from "@/pages/Setting/GeneralSettings/InitialSettings.tsx";
import EidSettings from "@/pages/Setting/GeneralSettings/EidSettings.tsx";
import GeneralCompensationSettings from "@/pages/Setting/GeneralSettings/GeneralCompensationSettings.tsx";
import { AppSwitch } from "@/components/AppSwitch.tsx";
import { AppInput } from "@/components/AppInput.tsx";

export default function Index() {
  const { t } = useTranslation();

  return (
    <SettingLayout
      props={{
        children: (
          <>
            <PageIndexTabs props={{}} />
            <div className="grid grid-cols-4 gap-4 h-[calc(100%-30px)]">
              <div className="overflow-auto">
                <InitialSettings props={{}} />
              </div>
              <div className="overflow-auto">
                <EidSettings props={{}} />
              </div>
              <div className="overflow-auto">
                <GeneralCompensationSettings
                  props={{
                    children: (
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="bg-surface dark:bg-surface-150 p-3 rounded-4">
                          <AppSwitch
                            props={{
                              children: (
                                <p className="text-secondary-1000 dark:text-white">
                                  {t("automaticOrderIssuance")}
                                </p>
                              ),
                            }}
                          />
                        </div>
                        <div className="bg-surface dark:bg-surface-150 p-3 rounded-4">
                          <AppSwitch
                            props={{
                              children: (
                                <p className="text-secondary-1000 dark:text-white">
                                  {t("issuanceOfYearsOfServiceOrder")}
                                </p>
                              ),
                            }}
                          />
                        </div>
                        <div className="bg-surface dark:bg-surface-150 p-3 rounded-4">
                          <Accordion>
                            <AccordionItem
                              aria-label={t("issuanceOfChildAllowanceOrder")}
                              classNames={{
                                title:
                                  "text-sm text-secondary-1000 dark:text-white",
                              }}
                              startContent={<AppSwitch props={{}} />}
                              title={t("issuanceOfChildAllowanceOrder")}
                            >
                              <div className="flex justify-between items-center text-sm text-secondary-1000 dark:text-white w-full">
                                <p className="flex-1">
                                  {t("maximumNoChildren")}
                                </p>
                                <AppInput
                                  props={{
                                    classNames: {
                                      inputWrapper: "shadow-lg",
                                      base: "w-1/3",
                                      input: "text-center",
                                    },
                                  }}
                                />
                              </div>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    ),
                  }}
                />
              </div>
              <div>
                <GeneralCompensationSettings props={{}} />
              </div>
            </div>
          </>
        ),
      }}
    />
  );
}
