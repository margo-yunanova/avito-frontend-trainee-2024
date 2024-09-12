import { TSortDirection } from '../utils/types';
import { Advertisement, Order } from './types';

const API_URL = 'http://localhost:3000';

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const request = async (
  endpoint: string,
  searchParams?: string,
  options?: RequestInit,
) => {
  const url = `${API_URL}/${endpoint}`;
  const params = {
    ...options,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...options?.headers,
    },
  };
  return checkResponse(await fetch(`${url}?${searchParams}`, params));
};

type AdvertisementParams = {
  page?: number;
  per_page?: number;
  searchValue?: string;
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
  searchValue = '',
}: AdvertisementParams): Promise<AdvertisementsPagination> => {
  const params = new URLSearchParams({
    _page: String(page),
    _per_page: String(per_page),
  });

  // INFO: в текущей версии json-server не поддерживает поиск по подстроке

  if (searchValue !== '') {
    params.append('name', searchValue);
  }

  return request('advertisements', params.toString());
};

export const getAdvertisement = async (id: string): Promise<Advertisement> => {
  return request(`advertisements/${id}`);
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

  return request('orders', params.toString());
};

export const createAdvertisement = async (
  advertisement: Omit<Advertisement, 'id' | 'views' | 'likes'>,
): Promise<Advertisement> => {
  return request('advertisements', '', {
    method: 'POST',
    body: JSON.stringify(advertisement),
  });
};

export const editAdvertisement = async (
  id: string,
  advertisement: Omit<Advertisement, 'id' | 'views' | 'likes' | 'createdAt'>,
): Promise<Advertisement> => {
  return request(`advertisements/${id}`, '', {
    method: 'PATCH',
    body: JSON.stringify(advertisement),
  });
};
