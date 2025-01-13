import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products');
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/category/${category}`);
  return response.data;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>('/products/categories');
  return response.data;
};

