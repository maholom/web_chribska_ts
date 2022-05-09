import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/g1p7go9605cm/environments/master',
  cache: new InMemoryCache(),
});

const RESERVATION_STARTDATE = gql`
  query {
    reservationCollection {
      items {
        name
        startDate
      }
    }
  }
`;

interface QueryResult {
  id: string;
  startDate: Date;
}

export const StartDateQuery: FC<QueryResult> = () => {
  const { data } = useQuery(RESERVATION_STARTDATE);

  return data.reservationColection.items.map(({ id, startDate }) => (
    <div key={id}>
      <p>
        {id}: {startDate}
      </p>
    </div>
  ));
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
