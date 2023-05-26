import type { NextPage } from 'next';

import { PageTypes } from '@core/constants/navigation';

import { ProductProps, getProductProps } from '@lib/server/product';
import usePage from '@lib/hooks/usePage';
import PageHeader from '@core/components/pages/PageHeader';
// import LandingDetail from '@components/products/detail';

const Product: NextPage<ProductProps> = (props) => {
  const { product } = props;

  const _page = usePage();

  return (
    <>
      <PageHeader
        pageType={PageTypes.main}
        metas={{
          titleAdd: product.name.current,
          descriptionId: 'productDetail.metas.description',
        }}
        marginTop={true}
      />

      {/*<LandingDetail 
        product={product}
      />*/}
    </>
  );
};

export default Product;

export const getServerSideProps = getProductProps;
