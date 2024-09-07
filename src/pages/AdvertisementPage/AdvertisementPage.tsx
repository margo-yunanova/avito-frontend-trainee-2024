import { ThumbUp, Visibility } from '@mui/icons-material';
import { Grid2 as Grid, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useLoaderData } from 'react-router-dom';

import { getAdvertisement } from '../../api/api';
import { Advertisement } from '../../api/types';

export const loader = async ({ params }) => {
  const advertisement = await getAdvertisement(params.advertisementId);
  return { advertisement };
};

export const AdvertisementPage = () => {
  const { advertisement } = useLoaderData() as { advertisement: Advertisement };
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: '250px' }}>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Typography variant="h4">{advertisement.name}</Typography>
          <Box
            width="100%"
            component="img"
            src={advertisement.imageUrl}
            alt={advertisement.name}
          ></Box>
        </Grid>
        <Grid size={8}>
          <Typography variant="h4">{advertisement.price} ₽</Typography>
          <Typography variant="body1">{advertisement.description}</Typography>
          <Typography variant="body2">
            Объявление размещено {advertisement.createdAt}
          </Typography>
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
            {advertisement.likes}
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
            {advertisement.views}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
