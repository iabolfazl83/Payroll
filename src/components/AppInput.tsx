import { Input } from "@heroui/react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const AppInput = ({ props }: { props: any }) => {
  const {
    label,
    required,
    error,
    name,
    placeholder,
    type,
    value,
    formik,
    startContent,
    endContent,
    isShowMode,
    disabled,
    classNames,
  } = props;

  const lang = useSelector((state: any) => state.language.lang);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    formik.handleBlur(name);
  };

  const inputWrapperClassNames = [
    isShowMode
      ? "!bg-gradient-to-r from-white via-[#EEF9FF] to-white dark:bg-gradient-to-r dark:from-[#01101A] dark:via-[#022C3D] dark:to-[#01101A]"
      : "!bg-white dark:!bg-info-1000",
    "border border-primary-0 rounded-5 !backdrop_blur[35px]",
    "dark:border-primary-0 dark:!shadow-secondary",
    isFocused && "!ring-2 ring-primary-500",
    error && "!border-red-500 !bg-red-100 dark:bg-red-800",
  ].join(" ");

  const inputClassNames = [
    "placeholder:text-netural-250 dark:placeholder:text-secondary-0 lg:placeholder:leading-5 placeholder:font-inter placeholder:leading-normal lg:placeholder:text-sm placeholder:text-xs placeholder:font-medium",
    isFocused && "focus:outline-none focus:ring-0",
    error && "text-red-500",
  ].join(" ");

  return (
    <>
      <span
        className={`text-secondary-1000 lg:text-sm text-xs lg:font-medium font-semibold leading-5 dark:text-white ${
          lang === "en" && ""
        }`}
      >
        {label} {required && "*"}
      </span>
      <Input
        classNames={{
          inputWrapper: inputWrapperClassNames + " " + classNames?.inputWrapper,
          input: inputClassNames + " " + classNames?.input,
        }}
        disabled={disabled}
        endContent={endContent}
        errorMessage={error}
        isRequired={required}
        name={name}
        placeholder={placeholder}
        startContent={startContent}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={formik.handleChange}
        onFocus={handleFocus}
      />
    </>
  );
};
