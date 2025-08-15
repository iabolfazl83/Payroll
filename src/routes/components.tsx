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

export const SalaryCalculationsDetails = Loadable(
  lazy(
    () => import("@/pages/SalaryCalculations/SalaryCalculationsDetails.tsx"),
  ),
);

export const EditHistory = Loadable(
  lazy(() => import("@/pages/SalaryCalculations/EditHistory/EditHistory.tsx")),
);

export const SalaryList = Loadable(
  lazy(() => import("@/pages/PayrollSlip/SalaryList/SalaryList.tsx")),
);

export const PaySlipList = Loadable(
  lazy(() => import("@/pages/PayrollSlip/PaySlip/PaySlipList.tsx")),
);

export const Reports = Loadable(
  lazy(() => import("@/pages/Reporting/Index.tsx")),
);

export const Comprehensive = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Comprehensive/Index.tsx")),
);

export const Deductions = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Deductions/Index.tsx")),
);

export const Additions = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Additions/Index.tsx")),
);

export const LeaveCalculation = Loadable(
  lazy(
    () => import("@/pages/Reporting/LegalReports/LeaveCalculation/Index.tsx"),
  ),
);

export const CalculateTheMission = Loadable(
  lazy(
    () =>
      import("@/pages/Reporting/LegalReports/CalculateTheMission/Index.tsx"),
  ),
);

export const ReportInsurance = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Insurance/Index.tsx")),
);

export const Tax = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Tax/Index.tsx")),
);

export const Eid = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Eid/Index.tsx")),
);

export const Years = Loadable(
  lazy(() => import("@/pages/Reporting/LegalReports/Years/Index.tsx")),
);

export const InsuranceReport = Loadable(
  lazy(
    () =>
      import("@/pages/Reporting/Excel-TextReports/InsuranceReport/Index.tsx"),
  ),
);

export const InsuranceList = Loadable(
  lazy(
    () =>
      import(
        "@/pages/Reporting/Excel-TextReports/InsuranceReport/InsuranceList/InsuranceList.tsx"
      ),
  ),
);

export const TaxReport = Loadable(
  lazy(() => import("@/pages/Reporting/Excel-TextReports/TaxReport/Index.tsx")),
);

export const TaxList = Loadable(
  lazy(
    () =>
      import(
        "@/pages/Reporting/Excel-TextReports/TaxReport/TaxList/TaxList.tsx"
      ),
  ),
);
