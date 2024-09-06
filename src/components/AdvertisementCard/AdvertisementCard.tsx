import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface Advertisment {
  id: string;
  name: string; //
  description?: string;
  price: number; //
  createdAt: string;
  views: number; //
  likes: number; //
  imageUrl?: string; //
}

export const AdvertisementCard: FC<Advertisment> = ({
  name,
  price,
  views,
  likes,
  imageUrl,
}) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt={`Изображение ${name}`}
        height="345"
        image={imageUrl}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography gutterBottom variant="h6" component="span">
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
          <ThumbUpIcon />
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
          <VisibilityIcon />
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
