import { ThumbUp, Visibility } from '@mui/icons-material';
import { Button, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { editAdvertisement, getAdvertisement } from '../../api/api';
import { Advertisement } from '../../api/types';
import { CreateAdvertisementModal } from '../../components/CreateAdvertisementModal';

export const AdvertisementPage = () => {
  const { advertisementId } = useParams();

  const [advertisement, setAdvertisement] = useState<Advertisement | null>(
    null,
  );
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditAdvertisement = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formJson = Object.fromEntries((formData as any).entries());
    const { name, description, price, imageUrl } = formJson;
    editAdvertisement(advertisementId!, {
      name,
      description,
      price,
      imageUrl,
    }).then((data) => {
      setAdvertisement(data);
      handleCloseModal();
    });
  };

  let formattedDate = '';

  if (advertisement?.createdAt) {
    formattedDate = new Date(advertisement?.createdAt).toLocaleDateString(
      'ru-RU',
    );
  }

  useEffect(() => {
    if (!advertisementId) return;

    getAdvertisement(advertisementId).then((data) => {
      setAdvertisement(data);
    });
  }, [advertisementId]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid size={6}>
          <Typography variant="h4" paddingBottom="25px" fontWeight="bold">
            {advertisement?.name}
          </Typography>
          <Box
            width="100%"
            component="img"
            src={advertisement?.imageUrl}
            alt={advertisement?.name}
          ></Box>
        </Grid>
        <Grid size={4}>
          <Typography variant="h4" paddingBottom="25px" fontWeight="bold">
            {advertisement?.price} ₽
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Описание
          </Typography>
          <Typography variant="body1" paddingTop="15px" paddingBottom="25px">
            {advertisement?.description}
          </Typography>
          <Typography variant="body2">
            Объявление размещено {formattedDate}
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
            {advertisement?.likes}
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
            {advertisement?.views}
          </Typography>
        </Grid>
        <Grid size={2}>
          <Button variant="contained" onClick={handleClickOpenModal}>
            Редактировать
          </Button>
        </Grid>
      </Grid>

      {openModal && (
        <CreateAdvertisementModal
          open={openModal}
          onClose={handleCloseModal}
          onSubmit={handleEditAdvertisement}
          name={advertisement?.name}
          description={advertisement?.description}
          price={advertisement?.price}
          imageUrl={advertisement?.imageUrl}
          title="Редактировать объявление"
          submitButtonText="Редактировать"
        />
      )}
    </Box>
  );
};
