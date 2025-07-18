import { DashboardLayout } from "@/pages/Dashboard/Layout.tsx";

export default function Dashboard() {
  return (
    <DashboardLayout
      props={{
        children: (
          <div className="w-full h-full bg-primary-0 dark:bg-primary-800 rounded-4 border border-primary" />
        ),
      }}
    />
  );
}
