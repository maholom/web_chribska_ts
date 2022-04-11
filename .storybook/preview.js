import { reactIntl } from './reactIntl.js';

export const parameters = {
  reactIntl,
  locale: reactIntl.defaultLocale,
  locales: {
    cs: 'Cesky',
    de: 'Deutsch',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
