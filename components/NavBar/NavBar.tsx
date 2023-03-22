import { useRouter } from 'next/router';
import Image from 'next/image';

import { FormattedMessage } from 'react-intl';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { convertElementToSx } from '@core/utils/themes';
import Link from '@core/components/Link';
// import HideOnScroll from '@core/components/HideOnScroll';

import { pages } from '@lib/constants/navigation';
import { themeCustomElements } from '@lib/constants/themes/elements';
import { useCartContext } from '@lib/contexts/CartContext';
import useDrawer from '@lib/hooks/useDrawer';
import Drawer from '@components/NavBar/Drawer';
import logo from 'public/images/navbar-logo.png';

const NavBar = () => {
  const { totalQuantity } = useCartContext();

  const router = useRouter();

  const appDrawer = useDrawer();

  return (
    <>
      {/*<HideOnScroll direction="down">*/}
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }} 
          onClick={appDrawer.close}
        >
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            justifyContent="center"
            py="0px"
            px="12px"
            sx={convertElementToSx(themeCustomElements.header.banners.shipping.content)}
          >
            <Grid item mr={1}>
              <LocalShippingIcon
                sx={{
                  ...themeCustomElements.header.banners.shipping.icon,
                  fontSize: 30, 
                  mt: '5px',
                }} 
              />
            </Grid>
            <Grid item>
              <Typography
                component="div"
                sx={convertElementToSx(themeCustomElements.header.banners.shipping.content)}
              >
                <FormattedMessage id="header.banners.shipping" />
              </Typography>
            </Grid>
          </Grid> 

          <Toolbar 
            variant="dense" 
            disableGutters
          >
            <IconButton
              size="large"
              aria-controls="app-drawer"
              aria-haspopup="true"
              onClick={appDrawer.handleOpen}
              sx={{ mr: 1 }}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <Container 
              maxWidth={false} 
              disableGutters
              sx={{ 
                display: 'flex',
                justifyContent: 'center', 
              }}
            > 
              <IconButton
                size="small"
                component={Link}
                href={pages.home.path}
                sx={{
                  p: 0,
                  pt: 1,
                  borderRadius: '10px',
                }}
              >
                { pages.home.filepath === router.pathname &&
                  <Typography component="h1" variant="h1" sx={{ display: 'none' }}>
                    <FormattedMessage id="home.h1" />
                  </Typography>
                }
                <Image
                  src={logo}
                  alt="Logo"
                  height="70px"
                  width="156px"
                  layout="fixed"
                  objectFit="cover"
                  priority
                />
              </IconButton>
            </Container>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              size='large'
              component={Link}
              href={pages.cart.path}
              sx={{ ml: 1 }}
            >
              <Badge badgeContent={totalQuantity > 9 ? '+9' : totalQuantity}>
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      {/*</HideOnScroll>*/}

      <Drawer
        key="app-drawer"
        anchor="left"
        open={appDrawer.open}
        items={appDrawer.items}
        handleOpen={appDrawer.handleOpen}
        handleCollapse={appDrawer.handleCollapse}
      />
    </>
  );
};

export default NavBar;
