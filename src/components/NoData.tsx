import { Image } from "@heroui/react";

import noData from "@/assets/img/no-data.svg";
export default function NoData({ props }: { props: any }) {
  const { message, size = { height: 300, width: 450 } } = props;

  return (
    <div className="text-center flex flex-col items-center justify-center w-full">
      <p className="text-secondary-1000 dark:text-white font-[20px] font-[400]">{message}</p>
      <Image height={size.height} src={noData} width={size.width} />
    </div>
  );
}
