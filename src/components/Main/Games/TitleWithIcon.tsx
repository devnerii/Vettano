// src/components/Main/Games/TitleWithIcon.tsx
import React from 'react';

interface TitleWithIconProps {
  IconComponent: React.ElementType;
  title: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({ IconComponent, title, headingLevel = 'h2' }) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <div className="col-span-12 flex items-center mt-6">
      <IconComponent className="text-[#ffa723] text-xl font-bold mr-2" aria-hidden="true" />
      <HeadingTag className="text-white text-xl font-bold">
        {title}
      </HeadingTag>
    </div>
  );
};

export default TitleWithIcon;
