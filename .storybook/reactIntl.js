const locales = ['en', 'el'];

const messages = locales.reduce(
  (acc, lang) => ({
    ...acc,
    [lang]: require(`../src/locales/${lang}.json`), // whatever the relative path to your messages json is
  }),
  {},
);

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages,
  formats,
};
