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

import DocItem from "./AppDocItems.tsx";

const Docs = () => {
  return (
    <div className="absolute flex items-center bg-surface dark:bg-surface-150 rounded-6 w-[860px] h-[94px] bottom-6 left-0 right-0 mx-auto">
      <div className="py-2 px-8">
        <div className="flex items-center gap-4">
          <DocItem
            props={{
              to: "/dashboard",
              icon: ElementEqual,
              title: "Dashboard",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/workspace",
              icon: DirectboxReceive,
              title: "workspace",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/performance",
              icon: Health,
              title: "Performance",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/recruitment",
              icon: ProfileAdd,
              title: "Recruitment",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/payroll",
              icon: CardReceive,
              title: "Payroll",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/attendance",
              icon: ArrowSwapHorizontal,
              title: "Attendance",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/project-management",
              icon: Hierarchy3,
              title: "Project.M",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/facilities",
              icon: TaskSquare,
              title: "Facilities",
              outlined: false,
            }}
          />
          <DocItem
            props={{
              to: "/basic-info",
              icon: ClipboardTick,
              title: "Basic Info",
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
              title: "Setting",
              outlined: true,
            }}
          />
          <DocItem
            props={{
              to: "/dashboard",
              icon: HashtagSquare,
              title: "Dashboard",
              outlined: true,
            }}
          />
          <DocItem
            props={{
              to: "/dashboard",
              icon: SmsTracking,
              title: "Dashboard",
              outlined: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Docs;
