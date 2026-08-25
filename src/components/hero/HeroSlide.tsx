import type { HeroSlideData } from '../../types/hero';

interface HeroSlideProps { slide: HeroSlideData; isActive: boolean; }

export const HeroSlide = ({ slide, isActive }: HeroSlideProps) => (
  <div className={`hero-slide${isActive ? ' active' : ''}`} style={{ backgroundImage: `url('${slide.image}')` }} />
);
