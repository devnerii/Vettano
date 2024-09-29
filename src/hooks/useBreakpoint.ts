// src/hooks/useBreakpoint.ts

import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>('base');

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width >= 1536) {
      setBreakpoint('2xl');
    } else if (width >= 1280) {
      setBreakpoint('xl');
    } else if (width >= 1024) {
      setBreakpoint('lg');
    } else if (width >= 768) {
      setBreakpoint('md');
    } else if (width >= 640) {
      setBreakpoint('sm');
    } else {
      setBreakpoint('base');
    }
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
