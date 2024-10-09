import React from "react";
import ContentContainer from "./ContentContainer";
import useBreakpoint from "../../hooks/useBreakpoint";

interface MainProps {
  leftTargetDate: string;
  rightTargetDate: string;
}

const Main: React.FC<MainProps> = ({ leftTargetDate, rightTargetDate }) => {
  const breakpoint = useBreakpoint();

  return (
    <ContentContainer
      leftTargetDate={leftTargetDate}
      rightTargetDate={rightTargetDate}
      breakpoint={breakpoint}
    />
  );
};

export default Main;
