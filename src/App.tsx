import './App.css';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { SideMenu } from './components/SideMenu';

export const App = () => (
  <Box sx={{ flexGrow: 1 }}>
    <SideMenu />
    <Outlet />
  </Box>
);
