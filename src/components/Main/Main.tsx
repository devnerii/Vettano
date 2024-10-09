import React from "react";
import CampaignSection from "./CampaignSection";
import useBreakpoint from "../../hooks/useBreakpoint";
import Games from "./Games"

interface MainProps {
  leftTargetDate: string;
  rightTargetDate: string;
}

const Main: React.FC<MainProps> = ({ leftTargetDate, rightTargetDate }) => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <CampaignSection
        leftTargetDate={leftTargetDate}
        rightTargetDate={rightTargetDate}
        breakpoint={breakpoint}
      />
      <Games />
    </>
  );
};


export default Main;
