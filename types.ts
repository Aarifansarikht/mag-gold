
export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
