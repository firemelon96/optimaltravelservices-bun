'use client';

import { useWindowScroll } from 'react-use';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { y: scrollY } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 300);
  }, [scrollY]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#4FAFAF] text-white hover:bg-[#4FAFAF] shadow-lg transition-all'
      aria-label='Scroll to top'
    >
      <ArrowUp className='w-5 h-5' />
    </button>
  );
};

export default ScrollToTop;
