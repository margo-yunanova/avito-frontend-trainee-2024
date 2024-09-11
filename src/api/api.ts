import { TSortDirection } from '../utils/types';
import { Advertisement, Order } from './types';

const API_URL = 'http://localhost:3000';
type AdvertisementParams = {
  page?: number;
  per_page?: number;
};

type AdvertisementsPagination = {
  data: Advertisement[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number | null;
};
export const getAdvertisements = async ({
  page = 1,
  per_page = 10,
}: AdvertisementParams): Promise<AdvertisementsPagination> => {
  const params = new URLSearchParams({
    _page: String(page),
    _per_page: String(per_page),
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
