import './App.css';

import { Outlet } from 'react-router-dom';

import { SideMenu } from './components/SideMenu';

export const App = () => (
  <>
    <SideMenu />
    <Outlet />
  </>
);
