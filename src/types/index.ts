export interface Vehicle {
  id: number;
  image: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuel: string;
  transmission?: string;
  power?: string;
  color?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string[];
}