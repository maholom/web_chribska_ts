import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { DatePickerInput } from './DatePickerInput';

export const ReservationForm = () => {
  return (
    <>
      <form>
        <Stack m={2} spacing={3}>
          <TextField label="Jméno a příjmení" />
          <TextField label="Email" />
          <TextField label="Zpráva" />
          <Button variant="contained" type="submit">
            Odeslat
          </Button>
        </Stack>
      </form>
    </>
  );
};
