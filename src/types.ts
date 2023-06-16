export interface Order {
  id: number;
  reference: string;
  date: string;
  customer_id: number;
  basket: BasketItem[];
  total_ex_taxes: number;
  delivery_fees: number;
  tax_rate: number;
  taxes: number;
  total: number;
  status: "ordered" | "delivered" | "canceled";
  returned: boolean;
}

export interface BasketItem {
  product_id: number;
  quantity: number;
}

export interface Product {
  id: number;
  category_id: number;
  reference: string;
  width: number;
  height: number;
  price: number;
  thumbnail: string;
  image: string;
  description: string;
  stock: number;
}

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  zipcode: string;
  city: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Invoice {
  id: number;
  string: string;
  command_id: number;
  customer_id: number;
  total_ex_taxes: number;
  delivery_fees: number;
  tax_rate: number;
  taxes: number;
  total: number;
}

export interface Review {
  id: number;
  string: string;
  status: "pending" | "accepted" | "rejected";
  command_id: number;
  product_id: number;
  customer_id: number;
  rating: number;
  comment: string;
}
