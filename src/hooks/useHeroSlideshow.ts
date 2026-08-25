import { useCallback, useEffect, useState } from 'react';

export const useHeroSlideshow = (slideCount: number, interval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (slideCount < 2) return undefined;
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slideCount);
    }, interval);
    return () => window.clearInterval(timer);
  }, [slideCount, interval]);

  return { currentSlide, goToSlide };
};
