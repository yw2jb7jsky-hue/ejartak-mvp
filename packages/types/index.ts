export type Car = {
  id: string;
  name: string;
  type: 'SUV' | 'سيدان' | 'عائلية' | 'فاخرة';
  pricePerDay: number;
  status: 'available' | 'reserved' | 'maintenance';
};

export type Booking = {
  id: string;
  customerName: string;
  carId: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
};

export type Office = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
};
