import type { Vehicle } from '../../types/vehicle';
export const VehicleSpecs = ({ vehicle }: { vehicle: Vehicle }) => (
  <div className="modal-specs-grid">
    <div className="modal-spec-item"><span>Body Style</span><strong>{vehicle.category}</strong></div><div className="modal-spec-item"><span>Year Model</span><strong>{vehicle.year}</strong></div><div className="modal-spec-item"><span>Engine Capacity</span><strong>{vehicle.engine}</strong></div><div className="modal-spec-item"><span>Fuel Type</span><strong>{vehicle.fuel}</strong></div><div className="modal-spec-item"><span>Transmission</span><strong>{vehicle.transmission}</strong></div><div className="modal-spec-item"><span>Location</span><strong>{vehicle.location}</strong></div>
  </div>
);
