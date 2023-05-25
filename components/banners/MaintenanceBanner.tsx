import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EngineeringIcon from '@mui/icons-material/Engineering';

import envConfig from '@core/config/env.config';
import { Environments } from '@core/constants/app';
import { convertElementToSx } from '@core/utils/themes';
import HideOnScroll from '@core/components/animations/HideOnScroll';

import { themeCustomElements } from '@lib/constants/themes/elements';

const MaintenanceBanner = () => {

  return (
    <>
      { envConfig.NEXT_PUBLIC_APP_ENV === Environments.development &&
        <HideOnScroll direction="up">
          <Grid     
            container
            wrap="nowrap"
            alignItems="center"
            justifyContent="center"
            sx={{
              ...convertElementToSx(themeCustomElements.header.banners.maintenance.content),
              position: 'fixed',
              bottom: '0px',
              py: '0px',
              px: '12px',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Grid item mr={1}>
              <EngineeringIcon 
                sx={{
                  ...convertElementToSx(themeCustomElements.header.banners.maintenance.icon),
                  fontSize: 30, 
                  mt: '5px',
                }} 
              />
            </Grid>
            <Grid item>
              <Typography
                component="div"
                variant="body1Head"
              >
                <FormattedMessage id="banners.maintenance" />
              </Typography>
            </Grid>
          </Grid>
        </HideOnScroll>
      }
    </>
  );
};

export default MaintenanceBanner;
