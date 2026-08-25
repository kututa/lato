interface SlideDotsProps { count: number; activeIndex: number; onSelect: (index: number) => void; }

export const SlideDots = ({ count, activeIndex, onSelect }: SlideDotsProps) => (
  <div className="slide-dots">
    {Array.from({ length: count }, (_, index) => <button key={index} className={`dot${index === activeIndex ? ' active' : ''}`} type="button" aria-label={`Show slide ${index + 1}`} onClick={() => onSelect(index)} />)}
  </div>
);
