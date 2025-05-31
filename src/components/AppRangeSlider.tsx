import { Slider } from "@heroui/react";

export const AppRangeSlider = ({ props }: { props: any }) => {
  const { maxValue, minValue, step, label, value, onChange } = props;

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        className="max-w-md"
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        value={value}
        onChange={onChange}
      />
      <p className="text-default-500 font-medium text-small">
        Selected budget:{" "}
        {Array.isArray(value) && value.map((b) => `${b}`).join(" – ")}
      </p>
    </div>
  );
};
