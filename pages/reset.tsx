import type { NextPage } from 'next';

import Container from '@mui/material/Container';

import { PageTypes } from '@core/constants/navigation';

import usePage from '@lib/hooks/usePage';
import PageHeader from '@components/ui/PageHeader';
import ResetPswForm from '@components/forms/auth/ResetPswForm';

const ResetPage: NextPage = () => {
  const page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.link}
        metas={{
          titleId: 'reset.metas.title',
          descriptionId: 'reset.metas.description',
          noindex: true,
          nofollow: true,
        }}
      />

      <Container>
        <ResetPswForm />
      </Container>
    </>
  );
};

export default ResetPage;
