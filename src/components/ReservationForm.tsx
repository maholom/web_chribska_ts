import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { ReservationCalendarForm } from './ReservationCalendarForm';
import createReservation from '../logic/contentful';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export const ReservationForm = () => {
  const intl = useIntl();
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [nameErrorText, setNameErrorText] = useState('');
  // const [emailErrorText, setEmailErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = (data: any) => {
    if (dateRange.startDate && dateRange.endDate) {
      console.log(JSON.stringify(data));
      console.log(dateRange);
      createReservation(
        data.name,
        data.message,
        data.email,
        dateRange.startDate,
        dateRange.endDate,
      );
    } else {
      console.log('error bez data');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack m={2} spacing={3}>
          <TextField
            label={intl.formatMessage({
              id: 'contact-form-name',
            })}
            {...register('name', {
              required: intl.formatMessage({
                id: 'contact-form-name',
              }),
            })}
            error={errors?.name ? true : false}
            helperText={errors?.name ? errors.name.message : null}
          />

          <TextField
            label={intl.formatMessage({
              id: 'contact-form-email',
            })}
            {...register('email', {
              required: intl.formatMessage({
                id: 'contact-form-email',
              }),
            })}
            error={errors?.email ? true : false}
            helperText={errors?.email ? errors.email.message : null}
          />

          <TextField
            label={intl.formatMessage({
              id: 'contact-form-message',
            })}
            type={'text'}
            {...register('message')}
          />
          <ReservationCalendarForm value={dateRange} onChange={setDateRange} />
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
