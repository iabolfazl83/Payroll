import React, { useState, useEffect } from "react";

import PageHeader from "@/components/PageHeader.tsx";

const containsPageHeader = (children: React.ReactNode): boolean => {
  return React.Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      if (child.type === PageHeader) {
        return true;
      }

      if (child.type === React.Fragment) {
        return containsPageHeader(child.props.children);
      }
    }

    return false;
  });
};

export default function HRBOXContentLayout({ props }: { props: any }) {
  const { children } = props;

  const [hasPageHeader, setHasPageHeader] = useState(false);

  useEffect(() => {
    const headerExists = containsPageHeader(children);

    setHasPageHeader(headerExists);
  }, [children]);

  const dynamicHeight = `calc(100vh - ${hasPageHeader ? "310px" : "270px"})`;

  return (
    <div className="w-full" style={{ height: dynamicHeight }}>
      {children}
    </div>
  );
}
