import type { Vehicle } from '../../types/vehicle';
import { VehicleGrid } from './VehicleGrid';
interface ShowroomProps { vehicles: Vehicle[]; onViewDetails: (vehicle: Vehicle) => void; }
export const Showroom = ({ vehicles, onViewDetails }: ShowroomProps) => (<section className="showroom-container" id="showroom"><div className="section-title"><h2>Available Vehicles</h2><span>Showing {vehicles.length} vehicle{vehicles.length === 1 ? '' : 's'}</span></div><VehicleGrid vehicles={vehicles} onViewDetails={onViewDetails} /></section>);
