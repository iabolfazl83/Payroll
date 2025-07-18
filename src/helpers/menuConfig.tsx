import { useTranslation } from "react-i18next";

import { Index } from "@/icons/Index.tsx";

export const GetMenuConfig = (pathname: string, darkMode: boolean) => {
  const { t } = useTranslation();
  const getColor = (route: string): string => {
    const isActive = pathname.startsWith(route);

    if (darkMode) return isActive ? "#DDBA69" : "#fff";

    return isActive ? "#0A9AD7" : "#04070E";
  };

  return [
    {
      icon: <Index.LinearChart color={getColor("/payroll/dashboard")} />,
      name: t("dashboard"),
      route: "/payroll/dashboard",
    },
    {
      icon: <Index.Code color={getColor("/payroll/judgment-issued")} />,
      name: t("judgmentIssued"),
      route: "/payroll/judgment-issued",
    },
    {
      icon: <Index.Card color={getColor("/payroll/salary-calculation")} />,
      name: t("salaryCalculations"),
      route: "/payroll/salary-calculations",
    },
    {
      icon: <Index.LinearGuard color={getColor("/payroll/payroll-slip")} />,
      name: t("payrollSlip"),
      route: "/payroll/payroll-slip",
    },
    {
      icon: <Index.Receive color={getColor("/payroll/reporting")} />,
      name: t("reporting"),
      route: "/payroll/reporting",
    },
    {
      icon: <Index.Setting color={getColor("/payroll/setting")} />,
      name: t("setting"),
      route: "/payroll/setting",
    },
  ];
};
