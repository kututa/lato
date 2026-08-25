import { useMemo, useState } from 'react';
import type { SortOption, Vehicle, VehicleCategory } from '../types/vehicle';

export const useVehicleFilters = (vehicles: Vehicle[]) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredVehicles = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const result = vehicles.filter((vehicle) => {
      const matchesCategory = activeCategory === 'all' || vehicle.category === activeCategory;
      const matchesSearch = vehicle.title.toLowerCase().includes(normalizedQuery)
        || vehicle.year.toString().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-low') return [...result].sort((a, b) => a.priceRaw - b.priceRaw);
    if (sortBy === 'price-high') return [...result].sort((a, b) => b.priceRaw - a.priceRaw);
    if (sortBy === 'year-desc') return [...result].sort((a, b) => b.year - a.year);
    return result;
  }, [activeCategory, searchQuery, sortBy, vehicles]);

  return { activeCategory, setActiveCategory, searchQuery, setSearchQuery, sortBy, setSortBy, filteredVehicles };
};
