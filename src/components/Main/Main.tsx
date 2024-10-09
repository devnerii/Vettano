import React from "react";
import CampaignSection from "./CampaignSection";
import useBreakpoint from "../../hooks/useBreakpoint";

interface MainProps {
  leftTargetDate: string;
  rightTargetDate: string;
}

const Main: React.FC<MainProps> = ({ leftTargetDate, rightTargetDate }) => {
  const breakpoint = useBreakpoint();

  return (
    <CampaignSection
      leftTargetDate={leftTargetDate}
      rightTargetDate={rightTargetDate}
      breakpoint={breakpoint}
    />
    
  );
};

export default Main;
