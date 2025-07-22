import { DatePicker } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function AppDatePicker() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-900">
        Effective Date
      </label>
      <DatePicker className="rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
    </div>
  );
}
