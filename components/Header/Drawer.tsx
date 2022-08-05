import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import { Drawers } from '@core/constants/header';
import Link from '@core/components/Link';
import useDrawer from '@lib/hooks/useDrawer';

type Props = {
  id: Drawers;
  anchor: 'top' | 'left' | 'bottom' | 'right';
  open: boolean;
  handleDrawer: () => void;
};

const Drawer = (props: Props) => {
  const { id, anchor, open, handleDrawer } = props;

  const { items } = useDrawer(id);

  return (
      <MuiDrawer
        color="primary"
        anchor={anchor}
        open={open}
        onClose={handleDrawer}
        sx={{
          flexShrink: 0,
        }}
      >
        <Toolbar />
        <Box
          color="primary"
          sx={{ overflow: 'auto', backgroundColor: 'primary' }}
          onClick={handleDrawer}
        >
          <List>
            {items.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={handleDrawer} component={Link} noLinkStyle href={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MuiDrawer>
  );
};

export default Drawer;
