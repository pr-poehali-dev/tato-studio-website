export interface PortfolioItem {
  id: number;
  title: string;
  style: string;
  image: string;
}

export interface Master {
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface Service {
  name: string;
  price: string;
  description: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
}

export interface NavItem {
  id: string;
  label: string;
}
