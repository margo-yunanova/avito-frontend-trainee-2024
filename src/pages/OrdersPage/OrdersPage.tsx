import { Stack } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

import { getOrders } from '../../api/api';
import { Order } from '../../api/types';
import { OrderCard } from '../../components/OrderCard';

export const loader = async () => {
  const orders = await getOrders();
  return { orders };
};

export const OrdersPage = () => {
  const { orders } = useLoaderData() as {
    orders: Order[];
  };

  return (
    <Stack
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap="20px"
      width="100%"
      paddingLeft="250px"
    >
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </Stack>
  );
};
