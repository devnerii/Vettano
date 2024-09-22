// components/animations/FallInAnimation.tsx
import React from "react";
import { motion } from "framer-motion";

interface FallInAnimationProps {
  children: React.ReactNode;
  duration?: number;
  initialY?: number;
}

const FallInAnimation: React.FC<FallInAnimationProps> = ({ children, duration = 1, initialY = -50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default FallInAnimation;
