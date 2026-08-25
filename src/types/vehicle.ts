export type VehicleCategory = 'all' | 'SUV' | 'Sedan' | 'Truck' | 'Luxury';
export type SortOption = 'default' | 'price-low' | 'price-high' | 'year-desc';

export interface Vehicle {
  id: number;
  title: string;
  category: Exclude<VehicleCategory, 'all'>;
  year: number;
  priceRaw: number;
  priceFormatted: string;
  engine: string;
  fuel: string;
  transmission: string;
  location: string;
  badge: string;
  image: string;
}
