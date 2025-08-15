import { useTranslation } from "react-i18next";

import { Index } from "@/icons/Index.tsx";
import { routeUrls } from "@/routes";

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
      route: routeUrls.home + "/" + routeUrls.dashboard,
    },
    {
      icon: <Index.Code color={getColor("/payroll/judgment-issued")} />,
      name: t("judgmentIssued"),
      route: routeUrls.home + "/" + routeUrls.judgmentIssued,
    },
    {
      icon: <Index.Card color={getColor("/payroll/salary-calculation")} />,
      name: t("salaryCalculations"),
      route: routeUrls.home + "/" + routeUrls.salaryCalculations,
    },
    {
      icon: <Index.LinearGuard color={getColor("/payroll/payroll-slip")} />,
      name: t("payrollSlip"),
      route: routeUrls.home + "/" + routeUrls.payrollSlip,
    },
    {
      icon: <Index.Receive color={getColor("/payroll/reports")} />,
      name: t("reporting"),
      route: routeUrls.home + "/" + routeUrls.reports,
    },
    {
      icon: <Index.Setting color={getColor("/payroll/setting")} />,
      name: t("setting"),
      route: routeUrls.home + "/" + routeUrls.setting,
    },
  ];
};
