// components/Skeleton.tsx
import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: boolean;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "100%", rounded = false, className = "" }) => (
  <div
    className={`animate-pulse bg-gray-300 ${rounded ? "rounded-full" : "rounded"} ${className}`}
    style={{ width, height }}
  ></div>
);

export default Skeleton;
