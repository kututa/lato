import { useEffect } from 'react';
import type { Vehicle } from '../../types/vehicle';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { VehicleSpecs } from './VehicleSpecs';
interface VehicleModalProps { vehicle: Vehicle | null; onClose: () => void; }
export const VehicleModal = ({ vehicle, onClose }: VehicleModalProps) => {
  useEffect(() => { if (!vehicle) return undefined; const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); }; window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape); }, [vehicle, onClose]);
  if (!vehicle) return null;
  return <div className="modal active" role="dialog" aria-modal="true" aria-label={`${vehicle.title} details`} onClick={onClose}><div className="modal-content" onClick={(event) => event.stopPropagation()}><button className="close-modal" type="button" aria-label="Close vehicle details" onClick={onClose}>&times;</button><img className="modal-img" src={vehicle.image} alt={vehicle.title} /><div className="modal-body"><h2>{vehicle.title}</h2><div className="modal-price">{vehicle.priceFormatted}</div><VehicleSpecs vehicle={vehicle} /><a href={createWhatsAppUrl(vehicle)} target="_blank" rel="noreferrer" className="whatsapp-btn"><i className="fa-brands fa-whatsapp" /> Inquire via WhatsApp</a></div></div></div>;
};
