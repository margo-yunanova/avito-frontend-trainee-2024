import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const navigation = [
  { title: 'Объявления', route: '/advertisements' },
  { title: 'Заказы', route: '/orders' },
];

export const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Drawer variant="permanent">
        <Box sx={{ width: 250 }}>
          <List>
            {navigation.map(({ title, route }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(route)}>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
