/* eslint-disable @typescript-eslint/no-var-requires */
import { Fragment } from 'react';

import { FormattedMessage } from 'react-intl';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { Source } from '@core/types/multimedia';
import { convertElementToSx } from '@core/utils/themes';
import LinkButton from '@core/components/LinkButton';
import CustomImage from '@core/components/CustomImage';

import { pages } from '@lib/constants/navigation';
import { homeUseImgIds, homeVideoIds } from '@lib/constants/multimedia';
import { themeCustomElements } from '@lib/constants/themes/elements';
import Title from '@components/ui/Title';
import use_food_preparation_bg from 'public/images/home/use-food-preparation-bg.jpg';
import use_food_preparation_everfresh from 'public/images/home/use-food-preparation-everfresh.png';
import use_bag_selection from 'public/images/home/use-bag-selection.png';
import MultimediaContainer from '@components/multimedia/MultimediaContainer';

const HomeUse = () => {
  const getPackingMachineStep = (index: number, source: Source) => {
    return (
      <>
        <Container>
          <Box
            maxWidth="sm"
            m="auto"
          >
            <Title
              type="h4Home"
              texts={{
                title: {
                  id: 'home.use.packingMachine.steps.title',
                  values: {
                    step: index + 1,
                  },
                },
              }}
              divider={false}
            />
            <Typography component="div" variant="body1">
              <FormattedMessage id={`home.use.packingMachine.steps.${index + 1}`} />
            </Typography>
          </Box>
        </Container>
        <MultimediaContainer
          type="default"
          source={source}
        />
      </>
    );
  };

  return (
    <>
      <Container id="use">
        <Box
          maxWidth="sm"
          m="auto"
        >
          <Title
            type="h2"
            texts={{
              title: {
                id: 'home.use.title',
              },
            }}
            divider={true}
          />
        </Box>
      </Container>

      {/* Food Preparation Section */}
      <Container id="useFoodPreparation">
        <Box
          maxWidth="sm"
          m="auto"
        >
          <Title
            type="h3Home"
            texts={{
              title: {
                id: 'home.use.foodPreparation.title',
              },
            }}
            divider={false}
          />
          <Typography component="div" variant="body1">
            <FormattedMessage id="home.use.foodPreparation.description" />
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{     
          position: 'absolute',
          width: '200px',
          left: {
            xs: '5%',
            sm: '12%',
            sm_md: '20%',
            md: '25%',
            md_lg: '30%',
            lg: '35%',
            xl: '40%',
          },
          pt: 2,
          zIndex: 1,
        }}
      >
        <CustomImage
          src={use_food_preparation_everfresh} 
          alt="Use food preparation EverFresh"
          layout="responsive" 
          objectFit="cover"
        />
      </Box>
      <MultimediaContainer
        type="default"
        source={{ 
          src: use_food_preparation_bg,
          alt: 'Use food preparation image',
        }}
        mt={10}
      />

      {/* Bag Selection Section */}
      <Container id="useBagSelection">
        <Box
          maxWidth="sm"
          m="auto"
        >
          <Title
            type="h3Home"
            texts={{
              title: {
                id: 'home.use.bagSelection.title',
              },
            }}
            divider={false}
          />
          <Typography component="div" variant="body1">
            <FormattedMessage id="home.use.bagSelection.description" />
          </Typography>
        </Box>
      </Container>
      <MultimediaContainer
        type="default"
        source={{ 
          src: use_bag_selection,
          alt: 'Use bag selection image',
        }}
      />
      <Container>
        <Box
          maxWidth="sm"
          m="auto"
        >
          <Title
            type="h4Home"
            texts={{
              title: {
                id: 'home.use.bagSelection.sizes.title',
              },
            }}
            divider={false}
          />
          <MultimediaContainer
            mt={-4}
            type="default"
            source={{ 
              src: homeUseImgIds[0],
              alt: 'Use bag selection sizes image',
              width: '1080',
              height: '1080',
            }}
            borderRadius="0px"
            maxWidth="xs_sm"
          />
          <LinkButton
            href={pages.bags.path}
            id="advantages"
            sx={{
              ...convertElementToSx(themeCustomElements.button.action.primary),
              mt: 4,
            }}
          >
            <FormattedMessage id="home.use.bagSelection.buyBtn" />
          </LinkButton>
        </Box>
      </Container>
  
      {/* Packing Machine Section */}
      <Container id="usePackingMachine">
        <Box
          maxWidth="sm"
          m="auto"
        >
          <Title
            type="h3Home"
            texts={{
              title: {
                id: 'home.use.packingMachine.title',
              },
            }}
            divider={false}
          />
          <Typography component="div" variant="body1">
            <FormattedMessage id="home.use.packingMachine.description" />
          </Typography>
        </Box>
      </Container>
      { 
        ([
          {
            type: 'video',
            src: homeVideoIds[0],
            alt: 'Use packing machine step 1',
          },
          {
            type: 'image',
            src: homeUseImgIds[1],
            alt: 'Use packing machine step 2',
          },
          {
            type: 'video',
            src: homeVideoIds[1],
            alt: 'Use packing machine step 3',
          },
          {
            type: 'video',
            src: homeVideoIds[2],
            alt: 'Use packing machine step 4',
          }
        ] as Source[]).map((item, index) => (
          <Fragment key={index}>
            { getPackingMachineStep(index, item) }
          </Fragment>
        ))
      }
    </>
  );
};

export default HomeUse;
