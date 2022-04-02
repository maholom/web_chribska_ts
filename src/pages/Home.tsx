import React from 'react';
import { useIntl } from 'react-intl';

const Home = () => {
  const intl = useIntl();
  return (
    <>
      <h1>Home</h1>
      <strong>
        {intl.formatMessage({
          id: 'app_name',
          // defaultMessage: 'Grootbasket',
        })}
      </strong>
      <strong>
        {intl.formatMessage({
          id: 'app_name2',
          defaultMessage: 'Grootbasket',
        })}
      </strong>
    </>
  );
};

export default Home;
