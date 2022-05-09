import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Box, TextField, TextFieldProps } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import { Box, TextField, TextFieldProps } from '@mui/material';
import React from 'react';
console.log(AdapterMoment);
export const DatePickerInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateRangePicker
        startText="Příjezd"
        endText="Odjezd"
        value={['', '']}
        onChange={() => {}}
        renderInput={(
          startProps: JSX.IntrinsicAttributes & TextFieldProps,
          endProps: JSX.IntrinsicAttributes & TextFieldProps,
        ) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> do </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};
