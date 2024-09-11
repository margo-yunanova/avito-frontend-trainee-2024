import { ThumbUp, Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
        width: '320px',
        height: '470px',
        borderRadius: '20px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        alt={`Изображение ${name}`}
        height="320px"
        image={imageUrl}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography gutterBottom variant="h6" component="span" color="primary">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="span">
          {price} ₽
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <IconButton aria-label="Количество лайков">
          <ThumbUp color="primary" />
        </IconButton>
        <Typography
          gutterBottom
          variant="h6"
          component="span"
          padding="8px 0"
          marginBottom="0"
        >
          {likes}
        </Typography>
        <IconButton aria-label="Количество просмотров">
          <Visibility color="primary" />
        </IconButton>
        <Typography
          gutterBottom
          variant="h6"
          component="span"
          padding="8px 0"
          marginBottom="0"
        >
          {views}
        </Typography>
      </CardActions>
    </Card>
  );
};
