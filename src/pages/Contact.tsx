import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box, Typography, alpha } from '@mui/material';
import { useIntl } from 'react-intl';
import MediaCard from '../components/Card';
import headliner_innen_1 from './homefoto/headliner_innen_1.jpg';
import headliner_innen_2 from './homefoto/headliner_innen_2.jpg';
import { ReservationForm } from '../components/ReservationForm';
import { theme } from '../theme';

const Contact = () => {
  const intl = useIntl();

  return (
    <>
      <Box maxWidth="xl">
        <Container>
          <Grid container sx={{ justifyContent: 'space-around' }}>
            <Typography
              textAlign="center"
              variant={'h2'}
              sx={{
                color: () => alpha(theme.palette.primary.main, 1),
                mb: 4,
                mt: 3,
              }}
            >
              {intl.formatMessage({
                id: 'contact-title',
              })}
            </Typography>
          </Grid>
        </Container>
        <Container sx={{ m: 2, p: 0 }}>
          <Grid container sx={{ justifyContent: 'space-around' }}>
            <MediaCard
              image={headliner_innen_1}
              intlKey="contact-pricelist-weekend"
            />
            <MediaCard
              image={headliner_innen_2}
              intlKey="contact-pricelist-weekend2"
            />
          </Grid>
        </Container>
        <Container>
          <Grid container sx={{ justifyContent: 'space-around' }}>
            <ReservationForm />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
