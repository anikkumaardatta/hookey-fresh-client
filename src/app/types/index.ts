export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  stock: number;
  brand: string;
  certifications: string[];
  weight: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  ingredients: string[];
  tags: string[];
}

export interface Store {
  storeId: string;
  storeName: string;
  location: Location;
  contact: Contact;
  categories: string[];
  openingHours: OpeningHours;
}
interface Location {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}
interface Contact {
  phone: string;
  email: string;
}
interface OpeningHours {
  saturday: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}
