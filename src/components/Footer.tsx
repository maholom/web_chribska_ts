import React from 'react';
import { alpha, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useIntl } from 'react-intl';
import { theme } from '../theme';

const Footer = () => {
  const intl = useIntl();

  return (
    <footer>
      <Box
        sx={{
          color: 'white',
          backgroundColor: () => alpha(theme.palette.primary.main, 1),
          pt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">
                <Box borderBottom={1}>
                  <strong>
                    {intl.formatMessage({
                      id: 'footer-adress',
                    })}
                  </strong>
                </Box>
              </Typography>
              <Typography variant="subtitle2">
                <Box>
                  {intl.formatMessage({
                    id: 'footer-adress-detail1',
                  })}
                </Box>
              </Typography>
              <Typography variant="subtitle2">
                <Box>
                  {intl.formatMessage({
                    id: 'footer-adress-detail2',
                  })}
                </Box>
              </Typography>
              <Typography variant="subtitle2">
                <Box>
                  {intl.formatMessage({
                    id: 'footer-adress-mail',
                  })}
                </Box>
              </Typography>
              <Typography variant="subtitle2">
                <Box>
                  {intl.formatMessage({
                    id: 'footer-adress-phone',
                  })}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">
                <Box borderBottom={1}>
                  <strong>
                    {intl.formatMessage({
                      id: 'footer-train',
                    })}
                  </strong>
                </Box>
              </Typography>
              <Typography variant="subtitle2" paragraph={true}>
                <Box>
                  {intl.formatMessage({
                    id: 'footer-train-description',
                  })}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">
                <Box borderBottom={1}>
                  <strong>
                    {intl.formatMessage({
                      id: 'footer-car',
                    })}
                  </strong>
                </Box>
              </Typography>
              <Typography variant="subtitle2" paragraph={true}>
                <Box>
                  {intl.formatMessage({
                    id: 'footer-car-description',
                  })}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
