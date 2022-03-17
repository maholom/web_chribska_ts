import intlMessagesEL from '../locales/el.json';
import intlMessagesEN from '../locales/en.json';

type i18nConfig = {
  defaultLocale: string;
  availableLocales: string[];
};

const messagesMap: Record<string, any> = {
  el: intlMessagesEL,
  en: intlMessagesEN,
};

class LocaleService {
  private readonly defaultLocale: string;
  private readonly availableLocales: string[];
  constructor(config: i18nConfig) {
    this.defaultLocale = config.defaultLocale;
    this.availableLocales = config.availableLocales;
  }

  getAvailableLocales() {
    return this.availableLocales;
  }

  getDefaultLocale() {
    return this.defaultLocale;
  }

  getMessages(lang: string) {
    if (this.availableLocales.includes(lang)) {
      return messagesMap[lang];
    }
    return messagesMap[this.defaultLocale];
  }
}

export default new LocaleService({
  defaultLocale: 'el',
  availableLocales: ['el', 'en'],
});
