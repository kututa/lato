import type { Vehicle } from '../types/vehicle';

const salesNumber = '254713000000';

export const createWhatsAppUrl = (vehicle: Vehicle): string => {
  const message = `Hello Lota Motors, I am interested in the ${vehicle.year} ${vehicle.title} listed for ${vehicle.priceFormatted}. Is it available?`;
  return `https://wa.me/${salesNumber}?text=${encodeURIComponent(message)}`;
};
