const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT-hE9KLKDtWUTB78C7ctx5ND0AXFnSkHt9O45N81ZRVG8',
});
 const createReservation = (
  name: string,
  message: string,
  email: string,
  startDate: Date,
  endDate: Date,
) => {
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
            'en-US': startDate,
          },
          endDate: {
            'en-US': endDate,
          },
          name: {
            'en-US': name,
          },
          email: {
            'en-US': email,
          },
          text: {
            'en-US': message,
          },
        },
      }),
    )
    .then((entry: any) => console.log(entry))
    .then((entry: any) => entry.publish())
    .catch(console.error);
};
export default createReservation;
