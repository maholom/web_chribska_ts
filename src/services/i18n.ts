import intlMessagesCS from '../locales/cs.json';
import intlMessagesDE from '../locales/de.json';

type i18nConfig = {
  defaultLocale: string;
  availableLocales: string[];
};

const messagesMap: Record<string, any> = {
  cs: intlMessagesCS,
  de: intlMessagesDE,
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
  defaultLocale: 'cs',
  availableLocales: ['cs', 'de'],
});
