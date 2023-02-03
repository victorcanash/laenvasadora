import Grid from '@mui/material/Grid';

import ProductAccordion from '@components/products/ProductAccordion';

const EverfreshDetail = () => {

  return (
    <>
      <Grid
        container
        className='animate__animated animate__fadeIn'
        spacing={1}
      >
        <Grid 
          item 
          xs={12} 
          sm={6}
        >
          <ProductAccordion
            textId={'everfresh.details'}
            itemsCount={6}
          />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={6}
        >
          <ProductAccordion
            textId={'everfresh.characteristics'}
            itemsCount={4}
          />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={6}
        >
          <ProductAccordion
            textId={'everfresh.dimensions'}
            itemsCount={2}
          />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={6}
        >
          <ProductAccordion
            textId={'productDetail.shipping'}
            itemsCount={3}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EverfreshDetail;
