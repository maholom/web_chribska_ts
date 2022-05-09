// import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://graphql.contentful.com/content/v1/spaces/g1p7go9605cm/environments/master',
//   cache: new InMemoryCache(),
// });

// const RESEVATION_STARTDATE = gql`
//   query GetStartDate {
//     reservationCollection {
//       items
//     }
//   }
// `;
// export const StartDate = () => {
//   const { loading, error, data } = useQuery(RESERVATION_STARTDATE);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.items.map(({ id, startDate }) => (
//     <div key={id}>
//       <p>
//         {id}: {startDate}
//       </p>
//     </div>
//   ));
// };
