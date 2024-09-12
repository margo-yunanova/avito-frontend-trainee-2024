import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { title: 'Объявления', route: '/advertisements' },
  { title: 'Заказы', route: '/orders' },
];

export const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer variant="permanent" PaperProps={{ sx: { borderRight: '0px' } }}>
      <Box sx={{ width: 200, paddingTop: '28px' }}>
        <List>
          {navigation.map(({ title, route }, index) => (
            <ListItem key={index} sx={{ paddingTop: '0px' }}>
              <ListItemButton
                onClick={() => navigate(route)}
                sx={{
                  paddingTop: '8px',
                  backgroundColor:
                    location.pathname === route ? 'rgba(0, 0, 0, 0.08)' : '',
                  borderRadius: '10px',
                }}
              >
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
