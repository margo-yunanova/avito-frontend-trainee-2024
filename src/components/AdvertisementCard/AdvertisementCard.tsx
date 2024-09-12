import { ThumbUp, Visibility } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

export interface IAdvertisement {
  id: string;
  name: string; //
  description?: string;
  price: number; //
  createdAt: string;
  views: number; //
  likes: number; //
  imageUrl?: string; //
  onClick?: () => void;
}

export const AdvertisementCard: FC<IAdvertisement> = ({
  name,
  price,
  views,
  likes,
  imageUrl,
  onClick,
}) => {
  return (
    <Card
      elevation={2}
      sx={{
        width: '240px',
        borderRadius: '20px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        alt={`Изображение ${name}`}
        height="240px"
        image={imageUrl}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          padding: '8px 16px 0',
        }}
      >
        <Typography
          gutterBottom
          variant="body1"
          component="span"
          color="primary"
          marginBottom="0"
          fontWeight="bold"
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="span"
          marginBottom="0"
          fontWeight="bold"
        >
          {price} ₽
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '8px 16px 8px 0',
        }}
      >
        <Stack display="flex" flexDirection="row" paddingLeft="8px">
          <IconButton aria-label="Количество лайков">
            <ThumbUp color="primary" />
          </IconButton>
          <Typography
            gutterBottom
            variant="body1"
            component="span"
            padding="8px 0"
            marginBottom="0"
          >
            {likes}
          </Typography>
        </Stack>
        <Stack display="flex" flexDirection="row">
          <IconButton aria-label="Количество просмотров">
            <Visibility color="primary" />
          </IconButton>
          <Typography
            gutterBottom
            variant="body1"
            component="span"
            padding="8px 0"
            marginBottom="0"
          >
            {views}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
