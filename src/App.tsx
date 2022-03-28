import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IntlProvider, useIntl } from 'react-intl';
import { ThemeProvider } from '@emotion/react';
import i18n from './services/i18n';
import './App.css';
import { theme } from './theme';
import ResponsiveAppBar from './components/ResponsiveAppBar';

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
const About = () => <h1>About</h1>;
const Accommodation = () => <h1>Accommodation</h1>;
const Contacts = () => <h1>Contacts</h1>;
const Missing = () => <h1>Missing</h1>;

function App() {
  const [lang, setLang] = useState(i18n.getDefaultLocale());
  const onChangeLanguage = (locale: string) => {
    setLang(locale);
  };
  const messages = i18n.getMessages(lang);
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        messages={messages}
        key={lang}
        locale={lang}
        defaultLocale="cs"
      >
        <div className="App">
          <Link data-testid="link-home" to="/">
            Home
          </Link>
          <Link data-testid="link-about" to="/about">
            O nás
          </Link>
          <Link data-testid="link-accommodation" to="/accommodation">
            Ubytování
          </Link>
          <Link data-testid="link-contacts" to="/contacts">
            Kontakty
          </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <ResponsiveAppBar
            onChangeLanguage={onChangeLanguage}
          ></ResponsiveAppBar>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
