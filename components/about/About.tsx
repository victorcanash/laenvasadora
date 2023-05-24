import { FormattedMessage } from 'react-intl';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { convertElementToSx } from '@core/utils/themes';
import LinkButton from '@core/components/LinkButton';

import { pages } from '@lib/constants/navigation';
import { themeCustomElements } from '@lib/constants/themes/elements';

const About = () => {

  return (
    <Container>
      <Typography variant="body1" sx={{ mb: 4 }}>
        <FormattedMessage id="about.content" />
      </Typography>

      <LinkButton
        href={pages.contact.path}
        sx={convertElementToSx(themeCustomElements.button.action.primary)}
      >
        <FormattedMessage
          id="about.contactBtn"
        />
      </LinkButton>
    </Container>
  );
};

export default About;
