import type { VehicleCategory } from '../../types/vehicle';
interface CategoryTabsProps { activeCategory: VehicleCategory; onChange: (category: VehicleCategory) => void; }
const categories: Array<{ label: string; value: VehicleCategory }> = [{ label: 'All Inventory', value: 'all' }, { label: 'SUVs', value: 'SUV' }, { label: 'Sedans', value: 'Sedan' }, { label: 'Pickups & Trucks', value: 'Truck' }, { label: 'Luxury', value: 'Luxury' }];
export const CategoryTabs = ({ activeCategory, onChange }: CategoryTabsProps) => (
  <div className="category-tabs">{categories.map(({ label, value }) => <button key={value} className={`tab-btn${activeCategory === value ? ' active' : ''}`} type="button" onClick={() => onChange(value)}>{label}</button>)}</div>
);
