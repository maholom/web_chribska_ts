import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useIntl } from 'react-intl';

const Footer = () => {
  const intl = useIntl();

  return (
    <footer>
      <Box position="static">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                {intl.formatMessage({
                  id: 'footer-adresa',
                })}
              </Box>
              <Box>
                {intl.formatMessage({
                  id: 'footer-kontakt',
                })}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <strong>
                  {intl.formatMessage({
                    id: 'footer-nadpis-adresa',
                  })}
                </strong>
              </Box>
              <Box>
                {intl.formatMessage({
                  id: 'footer-adresa',
                })}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                {intl.formatMessage({
                  id: 'footer-adresa',
                })}
              </Box>
              <Box>
                {intl.formatMessage({
                  id: 'footer-adresa',
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
