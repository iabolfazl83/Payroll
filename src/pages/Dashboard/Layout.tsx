import AppSideBar from "@/components/AppSideBar.tsx";
import { HRBOXLayout } from "@/layouts/HRBOXLayout.tsx";
import { GetMenuConfig } from "@/helpers/menuConfig.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";
import HRBOXContentLayout from "@/layouts/HRBOXContentLayout.tsx";

export const DashboardLayout = ({ props }: { props: any }) => {
  const { children } = props;
  const { darkMode } = useDarkMode();

  return (
    <HRBOXLayout
      props={{
        children: (
          <div className="flex gap-[26px] shadow-tight h-full min-h-fit">
            <AppSideBar menu={GetMenuConfig(location.pathname, darkMode)} />
            <HRBOXContentLayout props={{ children }} />
          </div>
        ),
      }}
    />
  );
};
