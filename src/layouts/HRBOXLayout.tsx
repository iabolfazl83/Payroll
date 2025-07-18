import AppHeader from "@/components/AppHeader.tsx";
import Docs from "@/components/AppDocs.tsx";

export const HRBOXLayout = ({ props }: { props: any }) => {
  const { children } = props;

  return (
    <>
      <AppHeader />
      <div className="h-[100lvh]">{children}</div>
      <Docs />
    </>
  );
};
