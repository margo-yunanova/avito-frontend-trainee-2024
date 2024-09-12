import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  IconButton,
  IconButtonProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { orderStatuses } from '../../utils/constants';
import { IAdvertisement } from '../AdvertisementCard/AdvertisementCard';

interface IOrderItem extends IAdvertisement {
  count: number;
}

interface IOrderCard extends IAdvertisement {
  id: string;
  status: keyof typeof orderStatuses;
  createdAt: string;
  finishedAt?: string;
  items: IOrderItem[];
  deliveryWay: string;
  total: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export const OrderCard: FC<IOrderCard> = ({
  id,
  status,
  createdAt,

  items,
  total,
}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        <CardContent
          sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Номер заказа: {id}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Статус: {orderStatuses[Number(status)]}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Сумма заказа: {total} ₽
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Количество товаров: {items.length}
          </Typography>
          {/* TODO - дата */}
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Дата создания заказа: {createdAt}
          </Typography>
        </CardContent>
      </div>
      <CardActions
        disableSpacing
        sx={{
          padding: '16px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
        }}
        onClick={handleExpandClick}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
          }}
        >
          Показать все товары
        </Typography>

        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Товары</TableCell>

                  <TableCell align="right">Стоимость в рублях</TableCell>
                  <TableCell align="right">Количество</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                    onClick={() => navigate(`/advertisements/${item.id}`)}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
};
