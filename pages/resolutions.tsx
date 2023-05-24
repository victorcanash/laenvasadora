import type { NextPage } from 'next';

import Container from '@mui/material/Container';

import { PageTypes } from '@core/constants/navigation';

import usePage from '@lib/hooks/usePage';
import PageHeader from '@components/ui/PageHeader';
import UserResolutionsForm from '@components/forms/user/UserResolutionsForm';

const ResolutionsPage: NextPage = () => {
  const page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.main}
        metas={{
          titleId: 'resolutions.metas.title',
          descriptionId: 'resolutions.metas.description',
          noindex: true,
          nofollow: true,
        }}
        marginTop={true}
        texts={{
          title: {
            id: 'resolutions.h1',
          },
        }}
      />

      <Container>
        <UserResolutionsForm />
      </Container>
    </>
  );
};

export default ResolutionsPage;