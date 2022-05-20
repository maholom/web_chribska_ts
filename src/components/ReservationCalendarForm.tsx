import React, { Dispatch, FC, SetStateAction, useState } from 'react';
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

type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

interface ReservationCalendarFormProps {
  value: DateRange;
  onChange: Dispatch<SetStateAction<DateRange>>;
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

const CheckError = (startDate: any, endDate: any, excludeDates: Date[]) => {
  if (startDate && endDate) {
    const excludeDatesString = excludeDates.map((e) => e.toDateString());
    if (
      getRange(startDate, endDate).find(
        (date) => excludeDatesString.indexOf(date.toDateString()) !== -1,
      )
    ) {
      return true;
    }
    return false;
  }
  return null;
};

export const ReservationCalendarForm: FC<ReservationCalendarFormProps> = ({
  value,
  onChange,
}) => {
  const intl = useIntl();
  const [startDate, setStartDate] = useState(value.startDate);
  const [endDate, setEndDate] = useState(value.endDate);
  const { data } = useQuery(RESERVATION_STARTDATE);
  if (!data?.reservationCollection) {
    return null;
  }

  const excludeDates = (
    data.reservationCollection.items as QueryResult[]
  ).reduce(
    (acc, { id, endDate: ed, startDate: sd }) => [...acc, ...getRange(sd, ed)],
    [] as Date[],
  );

  const onChangeInternal = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (CheckError(start, end, excludeDates) === false) {
      onChange({ startDate: start, endDate: end });
    } else {
      onChange({ startDate: null, endDate: null });
    }
  };

  const error = CheckError(startDate, endDate, excludeDates);

  return (
    <>
      {error && <div>{'error'}</div>}
      <DatePicker
        selected={startDate}
        onChange={onChangeInternal}
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
