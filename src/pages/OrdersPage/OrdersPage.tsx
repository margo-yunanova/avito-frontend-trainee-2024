import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { getOrders } from '../../api/api';
import { Order } from '../../api/types';
import { OrderCard } from '../../components/OrderCard';
import { orderStatuses } from '../../utils/constants';
import { TSortDirection } from '../../utils/types';

// TODO На карточке заказа изображена следующая информация: Возможность завершения заказа; - не понятно, что это

export const OrdersPage = () => {
  const [statusId, setStatusId] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [order, setSortDirection] = useState<TSortDirection | undefined>(
    undefined,
  );

  const filterByStatus = (event: SelectChangeEvent<typeof statusId>) => {
    const id = event.target.value;
    setStatusId(id);
    getOrders({ status: id, order }).then((data) => setOrders(data));
  };

  const sort = (event: SelectChangeEvent<TSortDirection>) => {
    const order = event.target.value as TSortDirection;
    setSortDirection(order);
    getOrders({
      status: statusId,
      order,
    }).then((data) => setOrders(data));
  };

  useEffect(() => {
    getOrders({}).then((data) => setOrders(data));
  }, []);

  return (
    <Stack display="flex" flexDirection="column" gap="20px" width="100%">
      <Stack display="flex" flexDirection="row" gap="30px">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="status-label">Статус</InputLabel>
          <Select
            labelId="status-label"
            id="status-id"
            value={statusId}
            label="Статус"
            onChange={filterByStatus}
          >
            <MenuItem value="">
              <em>Все</em>
            </MenuItem>
            {orderStatuses.map((orderStatus, id) => (
              <MenuItem key={id} value={String(id)}>
                {orderStatus}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="order-label">Сортировать</InputLabel>
          <Select
            labelId="order-label"
            id="order-id"
            value={order ?? ''}
            label="Сортировать"
            onChange={sort}
          >
            <MenuItem value="desc">Дешевле</MenuItem>
            <MenuItem value="asc">Дороже</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack display="flex" flexDirection="row" flexWrap="wrap" gap="20px">
        {orders.map((order) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </Stack>
    </Stack>
  );
};
