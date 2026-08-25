import { heroSlides } from '../../data/heroSlides';
import { useHeroSlideshow } from '../../hooks/useHeroSlideshow';
import { HeroSlide } from './HeroSlide';
import { SlideDots } from './SlideDots';

export const Hero = () => {
  const { currentSlide, goToSlide } = useHeroSlideshow(heroSlides.length);
  return (
    <section className="hero">
      <div className="hero-slideshow">{heroSlides.map((slide, index) => <HeroSlide key={slide.id} slide={slide} isActive={index === currentSlide} />)}</div>
      <div className="hero-overlay" />
      <div className="hero-content"><h1>Find Your Ideal Ride Today</h1><p>Explore Kenya's premier collection of certified new &amp; imported vehicles in Mombasa and Nairobi.</p></div>
      <SlideDots count={heroSlides.length} activeIndex={currentSlide} onSelect={goToSlide} />
    </section>
  );
};
