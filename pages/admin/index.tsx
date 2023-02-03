import type { NextPage } from 'next';

import { FormattedMessage } from 'react-intl';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { PageTypes } from '@core/constants/navigation';
import { AdminSections } from '@core/constants/admin';

import usePage from '@lib/hooks/usePage';
import useAdmin from '@lib/hooks/useAdmin';
import PageHeader from '@components/ui/PageHeader';
import GoBackBtn from '@components/ui/GoBackBtn';
import HomeSection from '@components/admin/sections/HomeSection';
import CheckCategoriesSection from '@components/admin/sections/CheckCategoriesSection';
import CheckProductsSection from '@components/admin/sections/CheckProductsSection';
import CreateCategorySection from '@components/admin/sections/CreateCategorySection';
import CreateProductSection from '@components/admin/sections/CreateProductSection';
import CreateFailedOrderSection from '@components/admin/sections/CreateFailedOrderSection';
import SendFailedOrderEmailSection from '@components/admin/sections/SendFailedOrderEmailSection';

const Admin: NextPage = () => {
  const page = usePage();
  const { section, checkProductsProps } = useAdmin(page.checked);

  const getCurrentSection = () => {
    if (section == AdminSections.home) {
      return (<HomeSection />);
    } else if (section == AdminSections.checkProductCategories) {
      return (<CheckCategoriesSection />);
    } else if (section == AdminSections.checkProducts && checkProductsProps) { 
      return (
        <CheckProductsSection 
          category={checkProductsProps.category}
          products={checkProductsProps.products}
          totalPages={checkProductsProps.totalPages}
          currentPage={checkProductsProps.currentPage}
          keywords={checkProductsProps.keywords}
          getAdminProduct={checkProductsProps.getAdminProduct}
        />
      );
    } else if (section == AdminSections.createProductCategory) {
      return (<CreateCategorySection />);
    } else if (section == AdminSections.createProduct) {
      return (<CreateProductSection />);
    } else if (section == AdminSections.createFailedOrder) {
      return (<CreateFailedOrderSection />);
    } else if (section == AdminSections.sendFailedOrderEmail) {
      return (<SendFailedOrderEmailSection />);
    }
    return undefined;
  };

  return (
    <>
      <PageHeader
        pageType={PageTypes.admin}
        metas={{
          titleId: 'admin.metas.title',
          descriptionId: 'admin.metas.description',
        }}
        marginTop={true}
      />

      { page.checked && section &&
        <Container>
          { section == AdminSections.home ?
            <Typography component="h1" variant="h1" className="animate__animated animate__fadeInLeft">
              <FormattedMessage id="admin.h1" />
            </Typography>
            :
            <GoBackBtn />
          }
          <Divider sx={{ mt: 1, mb: 3 }} />
          { getCurrentSection() }
        </Container>
      }
    </>
  );
};

export default Admin;
