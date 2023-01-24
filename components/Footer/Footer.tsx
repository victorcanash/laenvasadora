import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import envConfig from '@core/config/env.config';
import { pages } from '@lib/constants/navigation';
import Link from '@core/components/Link';

const Footer = () => {
  const color = "#E1E8CB";
  
  return (
    <Grid
      component="footer"
      container
      sx={{
        py: 3,
        px: 4,
        backgroundColor: "#30343C",
        color,
      }}
    >
      <Grid item xs={12} sm={6} sx={{ p: 2 }}>
        <Typography component="div" variant="h1" sx={{ mb: 2 }}>
          <FormattedMessage 
            id="footer.contact.title" 
          />
        </Typography>
        <Typography component="div" variant="body1" sx={{ mb: 2 }}>
          <FormattedMessage 
            id="footer.contact.content" 
          />
        </Typography>
        <Typography component="div" variant="body1">
          {envConfig.NEXT_PUBLIC_EMAIL}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ p: 2 }}>
        <Typography component="div" variant="h1" sx={{ mb: 2 }}>
          <FormattedMessage 
            id="footer.utility.title" 
          />
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography component={Link} href={pages.faq.path} variant="body1" sx={{ color }}>
            <FormattedMessage 
              id="footer.utility.faq" 
            />
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component={Link} href={pages.privacy.path} variant="body1" sx={{ color }}>
            <FormattedMessage 
              id="footer.utility.privacy"
            />
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component={Link} href={pages.cookies.path} variant="body1" sx={{ color }}>
            <FormattedMessage 
              id="footer.utility.cookies" 
            />
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component={Link} href={pages.legal.path} variant="body1"sx={{ color }}>
            <FormattedMessage 
              id="footer.utility.legal" 
            />
          </Typography>
        </Box>
        <Box>
          <Typography component={Link} href={pages.conditions.path} variant="body1"sx={{ color }}>
            <FormattedMessage 
              id="footer.utility.conditions" 
            />
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
