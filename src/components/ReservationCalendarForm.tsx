import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useQuery, gql } from '@apollo/client';
import { useIntl } from 'react-intl';
import { cs, de } from 'date-fns/locale';
import '../index.css';

const RESERVATION_STARTDATE = gql`
  query {
    reservationCollection {
      items {
        id
        startDate
        endDate
      }
    }
  }
`;

interface QueryResult {
  id: string;
  startDate: string;
  endDate: string;
}

function getRange(startDate: string, endDate: string): Date[] {
  let fromDate = moment(startDate);
  let toDate = moment(endDate);
  let diff = toDate.diff(fromDate, 'days');
  let range = [];
  for (let i = 0; i < diff; i++) {
    range.push(moment(startDate).add(i, 'days').toDate());
  }
  return range;
}

export const ReservationCalendarForm = () => {
  const intl = useIntl();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { data } = useQuery(RESERVATION_STARTDATE);
  if (!data?.reservationCollection) {
    return null;
  }

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const excludeDates = (
    data.reservationCollection.items as QueryResult[]
  ).reduce(
    (acc, { id, endDate: ed, startDate: sd }) => [...acc, ...getRange(sd, ed)],
    [] as Date[],
  );
  let error = null;
  if (startDate && endDate) {
    const excludeDatesString = excludeDates.map((e) => e.toDateString());
    if (
      getRange(startDate, endDate).find(
        (date) => excludeDatesString.indexOf(date.toDateString()) !== -1,
      )
    ) {
      error = 'xxx';
    }
  }
  return (
    <>
      <div>{error}</div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={excludeDates}
        selectsRange
        inline
        monthsShown={2}
        locale={intl.locale === 'cs' ? cs : de}
      />
    </>
  );
};
