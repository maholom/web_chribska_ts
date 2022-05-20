const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT-hE9KLKDtWUTB78C7ctx5ND0AXFnSkHt9O45N81ZRVG8',
});
const createReservation = () => {
  client
    .getSpace('g1p7go9605cm')
    .then((space: any) => space.getEnvironment('master'))
    .then((environment: any) =>
      environment.createEntry('reservation', {
        fields: {
          id: {
            'en-US': '1,2,3',
          },
          startDate: {
            'en-US': '2022-07-17',
          },
          endDate: {
            'en-US': '2022-07-19',
          },
          name: {
            'en-US': 'EE',
          },
          email: {
            'en-US': 'mat@seznam.cz',
          },
          text: {
            'en-US': 'ahoj',
          },
        },
      }),
    )
    .then((entry: any) => console.log(entry))
    .then((entry: any) => entry.publish())
    .catch(console.error);
};
export default createReservation;
