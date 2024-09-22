// components/animations/SlideInAnimation.tsx
import React from "react";
import { motion } from "framer-motion";

interface SlideInAnimationProps {
  children: React.ReactNode;
  duration?: number;
  initialX?: number;
  className?: string;
  onClick?: () => void;
}

const SlideInAnimation: React.FC<SlideInAnimationProps> = ({
  children,
  duration = 1,
  initialX = -100,
  className = "",
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: initialX }} // Exit animation with reverse slide
      transition={{ duration }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
