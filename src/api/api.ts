import { Advertisement, Order } from './types';

const API_URL = 'http://localhost:3000';

export const getAdvertisements = async (): Promise<Advertisement[]> => {
  const response = await fetch(`${API_URL}/advertisements`);
  const data = await response.json();
  return data;
};

export const getAdvertisement = async (id: number): Promise<Advertisement> => {
  const response = await fetch(`${API_URL}/advertisements/${id}`);
  const data = await response.json();
  return data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${API_URL}/orders`);
  const data = await response.json();
  return data;
};
