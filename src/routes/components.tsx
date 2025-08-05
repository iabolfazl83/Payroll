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

export const LegalParameters = Loadable(
  lazy(() => import("@/pages/Setting/Parameters/LegalParameters.tsx")),
);

export const ProprietaryParameters = Loadable(
  lazy(() => import("@/pages/Setting/Parameters/ProprietaryParameters.tsx")),
);
export const Calculation = Loadable(
  lazy(() => import("@/pages/Setting/Calculation/Calculation.tsx")),
);

export const Types = Loadable(
  lazy(() => import("@/pages/Setting/Types/Types.tsx")),
);

export const TaxTable = Loadable(
  lazy(() => import("@/pages/Setting/Tax/TaxTable.tsx")),
);

export const TaxOffice = Loadable(
  lazy(() => import("@/pages/Setting/Tax/TaxOffice.tsx")),
);

export const Category = Loadable(
  lazy(() => import("@/pages/Setting/Category/Category.tsx")),
);

export const Insurance = Loadable(
  lazy(() => import("@/pages/Setting/Insurance/Insurance.tsx")),
);

export const SalaryCalculations = Loadable(
  lazy(() => import("@/pages/SalaryCalculations/SalaryCalculations.tsx")),
);
