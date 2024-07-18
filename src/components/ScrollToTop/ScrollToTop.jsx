// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ containerSelector }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (container) {
      container.scrollTo(0, 0);
    }
  }, [pathname, containerSelector]);

  return null;
};

export default ScrollToTop;
