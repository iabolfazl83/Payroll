import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Page404 from "../pages/404";

import {
  Dashboard,
  IndividualOrder,
  GroupOrder,
  SalaryCalculations,
  GeneralSettingsIndex,
  CostCenter,
  LegalParameters,
  ProprietaryParameters,
  Calculation,
  Category,
  Types,
  TaxTable,
  TaxOffice,
  Insurance,
  SalaryCalculationsDetails,
  EditHistory,
  SalaryList,
  PaySlipList,
  Reports,
  Comprehensive,
  Deductions,
  Additions,
  LeaveCalculation,
  ReportInsurance,
  CalculateTheMission,
  Tax,
  Eid,
  Years,
  InsuranceReport,
  TaxReport,
  InsuranceList,
  TaxList,
} from "@/routes/components.tsx";

export const routeUrls = {
  home: "/payroll",
  dashboard: "dashboard",
  judgmentIssued: "judgment-issued",
  individualOrder: "individual-order",
  groupOrder: "group-order",
  salaryCalculations: "salary-calculations",
  salaryDetail: "salary-detail",
  setting: "setting",
  generalSettings: "general-settings",
  costCenter: "cost-center",
  parameters: "parameters",
  calculation: "calculation",
  types: "types",
  category: "category",
  taxes: "taxes",
  insurance: "insurance",
  legalParameters: "legal-parameters",
  proprietaryParameters: "proprietary-parameters",
  taxOffice: "tax-office",
  taxTable: "tax-table",
  editHistory: "edit-history",
  payrollSlip: "payroll-slip",
  salaryList: "salary-list",
  paySlipList: "payslip-list",
  reports: "reports",
  legalReports: "legal-reports",
  comprehensive: "comprehensive",
  deductions: "deductions",
  additions: "additions",
  leaveCalculation: "leave-calculation",
  calculateTheMission: "calculate-the-mission",
  tax: "tax",
  eid: "eid",
  years: "years",
  excelTextReports: "excel-text-reports",
  insuranceReports: "insurance-reports",
  taxReports: "tax-reports",
  taxList: "tax-list",
  insuranceList: "insurance-list",
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate replace to="/payroll" />,
  },
  {
    path: "/payroll",
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "judgment-issued",
        children: [
          {
            index: true,
            element: <Navigate replace to="individual-order" />,
          },
          {
            path: "individual-order",
            element: <IndividualOrder />,
          },
          {
            path: "group-order",
            element: <GroupOrder />,
          },
        ],
      },
      {
        path: "salary-calculations",
        children: [
          { index: true, element: <SalaryCalculations /> },
          {
            path: "edit-history",
            element: <EditHistory />,
          },
          { path: "salary-detail/:id", element: <SalaryCalculationsDetails /> },
        ],
      },

      {
        path: "payroll-slip",
        children: [
          {
            index: true,
            element: <Navigate replace to="salary-list" />,
          },
          {
            path: "salary-list",
            children: [
              {
                index: true,
                element: <SalaryList />,
              },
              {
                path: "payslip-list/:id",
                element: <PaySlipList />,
              },
            ],
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            index: true,
            element: <Reports />,
          },
          {
            path: "legal-reports",
            children: [
              { index: true, element: <Navigate replace to="comprehensive" /> },
              { path: "comprehensive", element: <Comprehensive /> },
              { path: "deductions", element: <Deductions /> },
              { path: "additions", element: <Additions /> },
              { path: "leave-calculation", element: <LeaveCalculation /> },
              {
                path: "calculate-the-mission",
                element: <CalculateTheMission />,
              },
              { path: "insurance", element: <ReportInsurance /> },
              { path: "tax", element: <Tax /> },
              { path: "eid", element: <Eid /> },
              { path: "years", element: <Years /> },
            ],
          },
          {
            path: "excel-text-reports",
            children: [
              {
                index: true,
                element: <Navigate replace to="insurance-reports" />,
              },
              {
                path: "insurance-reports",
                children: [
                  {
                    index: true,
                    element: <InsuranceReport />,
                  },
                  {
                    path: "insurance-list",
                    element: <InsuranceList />,
                  },
                ],
              },
              {
                path: "tax-reports",
                children: [
                  { index: true, element: <TaxReport /> },
                  {
                    path: "tax-list",
                    element: <TaxList />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "setting",
        children: [
          {
            index: true,
            element: <Navigate replace to="general-settings" />,
          },
          {
            path: "general-settings",
            element: <GeneralSettingsIndex />,
          },
          { path: "cost-center", element: <CostCenter /> },
          {
            path: "parameters",
            children: [
              {
                index: true,
                element: <Navigate replace to="legal-parameters" />,
              },
              { path: "legal-parameters", element: <LegalParameters /> },
              {
                path: "proprietary-parameters",
                element: <ProprietaryParameters />,
              },
            ],
          },
          { path: "calculation", element: <Calculation /> },
          { path: "types", element: <Types /> },
          { path: "category", element: <Category /> },
          {
            path: "taxes",
            children: [
              {
                index: true,
                element: <Navigate replace to="tax-table" />,
              },
              { path: "tax-table", element: <TaxTable /> },
              {
                path: "tax-office",
                element: <TaxOffice />,
              },
            ],
          },
          { path: "insurance", element: <Insurance /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
