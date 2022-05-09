import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

export const ReservationCalendar = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={{}}
          onChange={() => {}}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};
