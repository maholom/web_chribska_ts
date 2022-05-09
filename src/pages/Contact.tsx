import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
// import { useIntl } from 'react-intl';
import MediaCard from '../components/Card';
import headliner_innen_1 from './homefoto/headliner_innen_1.jpg';
import headliner_innen_2 from './homefoto/headliner_innen_2.jpg';
import { ReservationForm } from '../components/ReservationForm';
import { ReservationCalendar } from '../components/ReservationCalendar';

const Contact = () => {
  // const intl = useIntl();

  return (
    <>
      <Box maxWidth="xl">
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
          <Grid container>
            <Typography variant="h5">REZERVACE</Typography>
            <ReservationForm />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
