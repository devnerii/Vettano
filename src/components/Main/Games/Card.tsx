// src/components/Main/Games/Card.tsx
import React from 'react';
import Image from 'next/image';
import CustomButton from '../ui/CustomButton';

interface CardProps {
  title: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  buttonLabel?: string;
  buttonAriaLabel?: string;
  buttonClassName?: string;
  imageSrc?: string;
  imageAlt: string;
  imageStyles?: string;
  glowStyles?: string;
  backgroundGradient?: string;
  overlayText?: string;
  overlayButtonLabel?: string;
  overlayButtonClassName?: string;
  overlayButtonStyles?: string;
  isComingSoon?: boolean;
  customContent?: React.ReactNode;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl' : 'text-3xl',
  '4xl' : 'text-4xl'
};

const Card: React.FC<CardProps> = ({
  title,
  titleSize = 'xl',
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  imageSrc,
  imageAlt,
  imageStyles,
  glowStyles,
  backgroundGradient = 'bg-gradient-to-b from-[#1D1C49] to-[#323179]',
  overlayText,
  overlayButtonLabel,
  overlayButtonClassName,
  overlayButtonStyles,
  isComingSoon = false,
  customContent,
}) => (
  <article
    className={`w-full h-64 ${backgroundGradient} rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden`}
  >
    {isComingSoon && <div className="absolute inset-0 bg-black/10 z-10" aria-hidden="true"></div>}
    {overlayButtonLabel && (
      <button
        className={`absolute z-10 font-semibold text-sm text-white py-2 px-8 rounded-full bg-[#5048A3] top-10 left-10 ${overlayButtonStyles}`}
      >
        {overlayButtonLabel}
      </button>
    )}
    <h3
      className={`${sizeClasses[titleSize]} font-semibold relative ${
        isComingSoon ? 'z-30 top-16 opacity-60' : 'z-20'
      }`}
    >
      {title}
    </h3>
    {buttonLabel && (
      <CustomButton
        ariaLabel={buttonAriaLabel}
        className={`relative ${isComingSoon ? 'z-30' : 'z-20'} ${buttonClassName}`}
      >
        {buttonLabel}
      </CustomButton>
    )}

    {customContent}

    {imageSrc && (
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-full scale-100 z-10 pointer-events-none">
        {/* Glow */}
        {glowStyles && <div className={`${glowStyles} pointer-events-none`} aria-hidden="true"></div>}

        {/* Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="contain"
          className={`rounded-lg relative z-10 pointer-events-none ${imageStyles}`}
          loading="lazy"
        />
      </div>
    )}
  </article>
);

export default Card;
