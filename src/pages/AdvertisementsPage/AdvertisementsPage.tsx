import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { getAdvertisements } from '../../api/api';
import { Advertisement } from '../../api/types';
import { AdvertisementCard } from '../../components/AdvertisementCard';
import { CreateAdvertisementModal } from '../../components/CreateAdvertisementModal';

export const AdvertisementsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [quantity, setQuantity] = useState(10);
  const [page, setPage] = useState(+(searchParams.get('page') ?? 1));
  const [totalPages, setTotalPages] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDisplayedQuantity = (event: SelectChangeEvent) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    setPage(1);
  };

  const handlePagination = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    navigate(
      {
        pathname: '/advertisements',
        search: `${createSearchParams({ page: String(page) })}`,
      },
      { replace: true },
    );
  };

  useEffect(() => {
    getAdvertisements({ page }).then((data) => {
      setAdvertisements(data.data);
      setTotalPages(data.pages);
    });
  }, [page]);

  return (
    <>
      <Stack
        display="flex"
        flexDirection="column"
        gap="20px"
        width="90%"
        paddingLeft="250px"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <TextField
            id="search"
            label="Поиск"
            variant="outlined"
            margin="dense"
            sx={{ width: '300px' }}
          />
          <Stack display="flex" flexDirection="row">
            <FormControl sx={{ m: 1, width: '200px' }}>
              <InputLabel id="demo-simple-select-helper-label">
                Количество объявлений
              </InputLabel>
              <Select
                labelId="количество объявлений"
                id="количество объявлений"
                value={String(quantity)}
                label="Количество объявлений"
                onChange={handleDisplayedQuantity}
              >
                {[10, 50, 100].map((item, i) => (
                  <MenuItem key={i} value={String(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleClickOpenModal}
              sx={{ width: '300px' }}
            >
              Разместить объявление
            </Button>
          </Stack>
        </Stack>

        <Stack
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap="20px"
          width="100%"
        >
          {advertisements.map((advertisement) => (
            <AdvertisementCard
              key={advertisement.id}
              {...advertisement}
              onClick={() => navigate(`/advertisements/${advertisement.id}`)}
            />
          ))}
        </Stack>
        <Pagination
          count={totalPages}
          color="primary"
          page={page}
          onChange={handlePagination}
        />
      </Stack>

      {openModal && (
        <CreateAdvertisementModal open={openModal} onClose={handleCloseModal} />
      )}
    </>
  );
};
