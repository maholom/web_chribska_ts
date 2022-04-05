import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, alpha } from '@mui/material';
import home_headliner from './homefoto/home_headliner.jpg';
import home_headliner2 from './homefoto/home_headliner2.jpg';
import home_headliner3 from './homefoto/home_headliner3.jpg';
import home_headliner5 from './homefoto/home_headliner5.jpg';
import home_headliner6 from './homefoto/home_headliner6.jpg';
import home_headliner7 from './homefoto/home_headliner7.jpg';
import home_headliner8 from './homefoto/home_headliner8.jpg';
import home_headliner10 from './homefoto/home_headliner10.jpg';
import { srcset } from '../logic/srcset';
import { useIntl } from 'react-intl';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { theme } from '../theme';

const Home = () => {
  const intl = useIntl();

  return (
    <>
      <Box sx={{ m: 3 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <div>Caroussel</div>
            </Grid>
            <Grid
              container
              sx={{
                color: () => alpha(theme.palette.primary.main, 1),
                mb: 3,
                mt: 2,
              }}
            >
              <Grid item xs={12}>
                <Typography textAlign="center" variant={'h2'}>
                  {intl.formatMessage({
                    id: 'home-headliner',
                  })}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}
            >
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography paragraph={true}>
                    {intl.formatMessage({
                      id: 'home-text1',
                    })}
                  </Typography>
                </Box>
                <Box>
                  <Typography paragraph={true}>
                    {intl.formatMessage({
                      id: 'home-text2',
                    })}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ImageList
                  sx={{ width: 500, height: 450, pt: 0 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {itemData.map((item) => (
                    <ImageListItem
                      key={item.img}
                      cols={item.cols || 1}
                      rows={item.rows || 1}
                    >
                      <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                color: () => alpha(theme.palette.primary.main, 1),
              }}
            >
              <Grid item xs={12}>
                <Typography textAlign="center" variant={'h3'}>
                  {intl.formatMessage({
                    id: 'home-cfa',
                  })}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const itemData = [
  {
    img: home_headliner,
    title: 'Chalupa',
    rows: 2,
    cols: 2,
  },
  {
    img: home_headliner7,
    title: 'Chalupa',
  },
  {
    img: home_headliner8,
    title: 'Camera',
  },
  {
    img: home_headliner10,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: home_headliner5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: home_headliner6,
    title: 'Honey',
    rows: 2,
    cols: 2,
  },
  {
    img: home_headliner2,
    title: 'Basketball',
  },
  {
    img: home_headliner3,
    title: 'Fern',
  },
];

export default Home;
