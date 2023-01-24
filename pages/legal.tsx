import type { NextPage } from 'next';

import { FormattedMessage } from 'react-intl';

import Typography from '@mui/material/Typography';

import { PageTypes } from '@core/constants/navigation';
import usePage from '@lib/hooks/usePage';
import PageHeader from '@components/ui/PageHeader';

const Legal: NextPage = () => {
  const page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.main}
        metas={{
          titleId: 'legal.metas.title',
          descriptionId: 'legal.metas.description',
        }}
        texts={{
          titleId: 'legal.h1',
        }}
      />

      <Typography component="p" variant="body1">
        <FormattedMessage id="legal.content" />
      </Typography>
    </>
  );
};

export default Legal;
