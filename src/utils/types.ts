export enum OrderStatus {
  Created = 'Создан',
  Paid = 'Оплачен',
  Transport = 'В пути',
  DeliveredToThePoint = 'Доставлен',
  Received = 'Получен',
  Archived = 'Архивирован',
  Refund = 'Возврат',
}

export type TSortDirection = 'asc' | 'desc';
