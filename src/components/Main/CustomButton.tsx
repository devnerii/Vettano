// components/CustomButton.tsx
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  ariaLabel,
  ...rest
}) => {
  return (
    <button
      className={`px-4 sm:px-20 md:px-4 lg:px-6 xl:px-12 2xl:px-16 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-2xl text-white overflow-hidden transition-shadow duration-500 border-2 border-[#5D52EE] text-xs sm:text-sm md:text-xs lg:text-base xl:text-base 2xl:text-lg whitespace-nowrap mt-3 cursor-pointer relative z-20 ${className}`}
      style={{
        background: "linear-gradient(to right, #8E83FB, #5D52EE)",
        fontFamily: "Montserrat",
        fontWeight: 500,
      }}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
