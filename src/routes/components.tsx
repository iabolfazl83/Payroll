import { lazy } from "react";

import { Loadable } from "./Loadable";

export const Dashboard = Loadable(
  lazy(() => import("@/pages/Dashboard/index.tsx")),
);

export const IndividualOrder = Loadable(
  lazy(() => import("@/pages/JudgmentIssued/IndividualOrder.tsx")),
);

export const GroupOrder = Loadable(
  lazy(() => import("@/pages/JudgmentIssued/GroupOrder.tsx")),
);

export const GeneralSettingsIndex = Loadable(
  lazy(() => import("@/pages/Setting/GeneralSettings/Index.tsx")),
);

export const CostCenter = Loadable(
  lazy(() => import("@/pages/Setting/CostCenter/CostCenter.tsx")),
);

export const SalaryCalculations = Loadable(
  lazy(() => import("@/pages/SalaryCalculations/SalaryCalculations.tsx")),
);
