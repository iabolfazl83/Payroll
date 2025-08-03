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
  Types,
} from "@/routes/components.tsx";
import Category from "@/pages/Setting/Category/Category.tsx";

export const routeUrls = {
  home: "/payroll",
  dashboard: "dashboard",
  judgmentIssued: "judgment-issued",
  individualOrder: "individual-order",
  groupOrder: "group-order",
  salaryCalculations: "salary-calculations",
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
        element: <SalaryCalculations />,
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
          { path: "taxes" },
          { path: "insurance" },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
