import { DashboardLayout } from "@/pages/Dashboard/Layout.tsx";

export default function Dashboard() {
  return (
    <DashboardLayout
      props={{
        children: (
          <div className="w-full h-full bg-primary-0 dark:bg-[rgba(4,66,92,0.60)] dark:border-surface-200 rounded-4 border border-primary" />
        ),
      }}
    />
  );
}
