import type { NextPage } from 'next';

import { PageTypes } from '@core/constants/navigation';

import { keywords } from '@lib/config/next-seo.config';
import usePage from '@lib/hooks/usePage';
import PageHeader from '@components/ui/PageHeader';
import Home from '@components/home';

const HomePage: NextPage = () => {
  const page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.main}
        metas={{
          titleAdd: keywords.vacuumMachine.main,
          descriptionAdd: keywords.vacuumMachine.main,
        }}
      />

      <Home />
    </>
  );
};

export default HomePage;
