// components/Header/ResponsiveWrapper.tsx
import React from "react";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  isMobile: boolean;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  isMobile,
}) => {
  return (
    <div
      className={isMobile ? "mobile-styles" : "desktop-styles"}
    >
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
