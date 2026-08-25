import type { SortOption, VehicleCategory } from '../../types/vehicle';
import { CategoryTabs } from './CategoryTabs';
import { SearchBar } from './SearchBar';
import { SortSelect } from './SortSelect';
interface VehicleFiltersProps { searchQuery: string; activeCategory: VehicleCategory; sortBy: SortOption; onSearchChange: (value: string) => void; onCategoryChange: (value: VehicleCategory) => void; onSortChange: (value: SortOption) => void; }
export const VehicleFilters = (props: VehicleFiltersProps) => (
  <div className="filter-wrapper"><div className="filter-card"><div className="search-row"><SearchBar value={props.searchQuery} onChange={props.onSearchChange} /><SortSelect value={props.sortBy} onChange={props.onSortChange} /></div><CategoryTabs activeCategory={props.activeCategory} onChange={props.onCategoryChange} /></div></div>
);
