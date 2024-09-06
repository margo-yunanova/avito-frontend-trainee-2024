import { Stack } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

import { getAdvertisements } from '../../api/api';
import { AdvertisementCard } from '../../components/AdvertisementCard';

export async function loader() {
  const advertisements = await getAdvertisements();
  return { advertisements };
}

export const AdvertisementsPage = () => {
  const { advertisements } = useLoaderData();

  return (
    <div style={{ paddingLeft: '250px', width: '100%' }}>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="20px"
        width="100%"
      >
        {advertisements.map((advertisement) => (
          <AdvertisementCard key={advertisement.id} {...advertisement} />
        ))}
      </Stack>
    </div>
  );
};
