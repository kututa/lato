import type { Vehicle } from '../../types/vehicle';
import { VehicleCard } from './VehicleCard';
interface VehicleGridProps { vehicles: Vehicle[]; onViewDetails: (vehicle: Vehicle) => void; }
export const VehicleGrid = ({ vehicles, onViewDetails }: VehicleGridProps) => (
  <div className="inventory-grid">{vehicles.length ? vehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} onViewDetails={onViewDetails} />) : <div className="no-results"><i className="fa-solid fa-car-side" /><h3>No vehicles found</h3><p>Try adjusting your search criteria or category filter.</p></div>}</div>
);
