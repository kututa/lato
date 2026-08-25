import type { SortOption } from '../../types/vehicle';
interface SortSelectProps { value: SortOption; onChange: (value: SortOption) => void; }
export const SortSelect = ({ value, onChange }: SortSelectProps) => (
  <div className="sort-group"><select value={value} onChange={(event) => onChange(event.target.value as SortOption)}><option value="default">Sort By: Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="year-desc">Year: Newest First</option></select></div>
);
