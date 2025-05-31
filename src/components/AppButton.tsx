import { Button } from "@heroui/react";

export const AppButton = ({ props }: { props: any }) => {
  const {
    text,
    className,
    fullWidth,
    size,
    type,
    variant,
    onClick,
    startContent,
    endContent,
    isIconOnly,
  } = props;

  return (
    <Button
      className={className}
      endContent={endContent}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      size={size}
      startContent={startContent}
      type={type}
      variant={variant}
      onPress={onClick}
    >
      {text}
    </Button>
  );
};
