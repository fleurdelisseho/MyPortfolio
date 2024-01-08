import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={scrollToTop}
      id="scrollBtn"
      title="Go to top"
      className={`fixed bottom-5 right-5 bg-[#20C997] text-white h-12 w-12 flex items-center justify-center rounded-full font-bold text-[25px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
