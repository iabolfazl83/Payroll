import AppHeader from "@/components/AppHeader.tsx";
import { AppMessengerButton } from "@/components/AppMessengerButton.tsx";

export const HRLinkLayout = ({ props }: { props: any }) => {
  const { children } = props;

  return (
    <>
      <AppHeader />
      {children}
      <AppMessengerButton/>
    </>
  );
};
