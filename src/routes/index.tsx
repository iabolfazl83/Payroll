import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Page404 from "../pages/404";

import {
  Dashboard,
  IndividualOrder,
  GroupOrder,
  SalaryCalculations,
} from "@/routes/components.tsx";

export const routeUrls = {
  home: "/payroll",
  dashboard: "/dashboard",
  judgmentIssued: "judgment-issued",
  individualOrder: "individual-order",
  groupOrder: "group-order",
  salaryCalculations: "salary-calculations",
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
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
