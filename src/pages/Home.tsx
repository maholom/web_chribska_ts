import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, alpha } from '@mui/material';
import Jagdhaus_Logo_RGB from './logo/Jagdhaus_Logo_RGB.svg';
import { srcset } from '../logic/srcset';
import { useIntl } from 'react-intl';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { theme } from '../theme';
import { Link } from 'react-router-dom';
import { itemDataCollageHome } from './utils';

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
                  sx={{ width: 500, height: 500, pt: 0 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {itemDataCollageHome.map((item) => (
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
              <Grid item xs={8}>
                <Link data-testid="link-contact-logo" to="/contact">
                  <img src={Jagdhaus_Logo_RGB} alt="logo color" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
