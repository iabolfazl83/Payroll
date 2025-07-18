import {
  CardReceive,
  DirectboxReceive,
  ElementEqual,
  Health,
  ProfileAdd,
  ArrowSwapHorizontal,
  Hierarchy3,
  TaskSquare,
  ClipboardTick,
  Setting2,
  HashtagSquare,
  SmsTracking,
} from "iconsax-react";
import { Divider } from "@heroui/react";
import { useTranslation } from "react-i18next";

import DocItem from "./AppDocItems.tsx";

const Docs = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute flex items-center bg-surface dark:bg-surface-150 rounded-6 w-[860px] h-[94px] bottom-6 left-0 right-0 mx-auto">
      <div className="py-2 px-8">
        <div className="flex items-center gap-4">
          <DocItem
            props={{
              to: "/dashboard",
              icon: ElementEqual,
              title: t("dashboard"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/workspace",
              icon: DirectboxReceive,
              title: t("workspace"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/performance",
              icon: Health,
              title: t("performance"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/recruitment",
              icon: ProfileAdd,
              title: t("recruitment"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/payroll",
              icon: CardReceive,
              title: t("payroll"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/attendance",
              icon: ArrowSwapHorizontal,
              title: t("attendance"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/project-management",
              icon: Hierarchy3,
              title: t("projectManagement"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/facilities",
              icon: TaskSquare,
              title: t("facilities"),
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/basic-info",
              icon: ClipboardTick,
              title: t("BasicInfo"),
              outlined: false,
            }}
          />
          <Divider
            className="h-16 bg-secondary-300 dark:bg-primary-150"
            orientation="vertical"
          />
          <DocItem
            props={{
              to: "/setting",
              icon: Setting2,
              title: t("generalSetting"),
              outlined: true,
            }}
          />
          <DocItem
            props={{
              to: "/dashboard",
              icon: HashtagSquare,
              title: t("dashboard"),
              outlined: true,
            }}
          />
          <DocItem
            props={{
              to: "/dashboard",
              icon: SmsTracking,
              title: t("dashboard"),
              outlined: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Docs;
