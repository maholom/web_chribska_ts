import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReservationCalendarForm } from './ReservationCalendarForm';

export const ReservationForm = () => {
  const intl = useIntl();
  return (
    <>
      <form>
        <Stack m={2} spacing={3}>
          <TextField
            label={intl.formatMessage({
              id: 'contact-form-name',
            })}
          />
          <TextField
            label={intl.formatMessage({
              id: 'contact-form-email',
            })}
          />
          <TextField
            label={intl.formatMessage({
              id: 'contact-form-message',
            })}
          />
          <ReservationCalendarForm />
          <Button variant="contained" type="submit">
            {intl.formatMessage({
              id: 'contact-button-submit',
            })}
          </Button>
        </Stack>
      </form>
    </>
  );
};
