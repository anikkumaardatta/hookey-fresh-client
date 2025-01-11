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
