import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, alpha } from '@mui/material';
import { useIntl } from 'react-intl';
import MediaCard from '../components/Card';

const Contact = () => {
  const intl = useIntl();

  return (
    <>
      <Box maxWidth="xl">
        <Container sx={{ m: 0, p: 0 }}>
          <Grid container>
            <Box>
              <MediaCard></MediaCard>
            </Box>
            <Box>
              <MediaCard></MediaCard>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
