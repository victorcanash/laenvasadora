import type { NextPage } from 'next';

import Container from '@mui/material/Container';

import { PageTypes } from '@core/constants/navigation';

import { ActivationProps, getActivationProps } from '@lib/server/activation';
import usePage from '@lib/hooks/usePage';
import PageHeader from '@components/ui/PageHeader';
import ActivationForm from '@components/forms/auth/ActivationForm';

const Activation: NextPage<ActivationProps> = (props) => {
  const { successMsg, errorMsg } = props;

  const page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.link}
        metas={{
          titleId: 'activation.metas.title',
          descriptionId: 'activation.metas.description',
          noindex: true,
          nofollow: true,
        }}
      />

      <Container>
        <ActivationForm 
          successMsg={successMsg}
          errorMsg={errorMsg}
        />
      </Container>
    </>
  );
};

export default Activation;

export const getServerSideProps = getActivationProps;
