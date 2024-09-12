import './App.css';

import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { SideMenu } from './components/SideMenu';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/advertisements');
  }, [navigate]);

  return (
    <Stack>
      <SideMenu />
      <Stack paddingLeft="250px" maxWidth="1530px">
        <Outlet />
      </Stack>
    </Stack>
  );
};
