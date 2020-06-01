import { useEffect, useState } from 'react';

const useScrollListener = px => {
  let [isScrolled, setIsScrolled] = useState(false);
  const pixels = px ? px : 30;

  const _handleScroll = () => {
    if (
      document.body.scrollTop > pixels ||
      document.documentElement.scrollTop > pixels
    ) {
      setIsScrolled((isScrolled = true));
    } else {
      setIsScrolled((isScrolled = false));
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', _handleScroll);

      return () => {
        window.removeEventListener('scroll', _handleScroll);
      };
    }
  }, []);

  return isScrolled;
};

export default useScrollListener;
