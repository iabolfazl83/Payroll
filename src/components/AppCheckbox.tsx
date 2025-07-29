import { Checkbox } from "@heroui/react";

export default function AppCheckbox({ props }: { props: any }) {
  const { disabled, isSelected, radius, onChange } = props;

  return (
    <Checkbox
      classNames={{
        wrapper: "after:dark:!bg-surface-200",
      }}
      disabled={disabled}
      isSelected={isSelected}
      radius={radius}
      onChange={onChange}
    />
  );
}
