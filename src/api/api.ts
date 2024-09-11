import { TSortDirection } from '../utils/types';
import { Advertisement, Order } from './types';

const API_URL = 'http://localhost:3000';
type AdvertisementParams = {
  start?: number;
  limit?: number;
};
export const getAdvertisements = async ({
  start = 0,
  limit = 10,
}: AdvertisementParams): Promise<Advertisement[]> => {
  const params = new URLSearchParams({
    _start: String(start),
    _limit: String(limit),
  });

  const response = await fetch(
    `${API_URL}/advertisements?${params.toString()}`,
  );
  const data = await response.json();
  return data;
};

export const getAdvertisement = async (id: number): Promise<Advertisement> => {
  const response = await fetch(`${API_URL}/advertisements/${id}`);
  const data = await response.json();
  return data;
};

type OrderParams = {
  status?: string;
  order?: TSortDirection;
};

export const getOrders = async ({
  status,
  order,
}: OrderParams): Promise<Order[]> => {
  const params = new URLSearchParams();

  if (status !== undefined) {
    params.append('status', status);
  }

  if (order) {
    const orderParam = order === 'asc' ? '' : '-';
    params.append('_sort', `${orderParam}total`);
  }

  const response = await fetch(`${API_URL}/orders?${params.toString()}`);

  const data = await response.json();

  return data;
};
