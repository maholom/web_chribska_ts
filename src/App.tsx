import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { IntlProvider, useIntl } from 'react-intl';
import LanguageSwitcher from './LanguageSwitcher';
import i18n from './services/i18n';
import logo from './logo.svg';
import './App.css';

const Intro = () => {
  const navigate = useNavigate();
  const handleIntroClick = () => {
    navigate('/');
  };
  return (
    <>
      <h1>Intro</h1>
      <button onClick={handleIntroClick}>Vstupte</button>
    </>
  );
};
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
const References = () => <h1>References</h1>;
const Contacts = () => <h1>Contacts</h1>;
const Guest = () => <h1>Guest</h1>;
const Missing = () => <h1>Missing</h1>;

function App() {
  const [lang, setLang] = useState(i18n.getDefaultLocale());
  const onChangeLanguage = (locale: string) => {
    setLang(locale);
  };
  const messages = i18n.getMessages(lang);
  return (
    <IntlProvider
      messages={messages}
      key={lang}
      locale={lang}
      defaultLocale="en"
    >
      <div className="App">
        <Link data-testid="link-intro" to="/intro">
          Intro
        </Link>
        <Link data-testid="link-about" to="/about">
          About
        </Link>
        <Link data-testid="link-home" to="/">
          Home
        </Link>
        <Link data-testid="link-accommodation" to="/accommodation">
          Accommodation
        </Link>
        <Link data-testid="link-references" to="/references">
          References
        </Link>
        <Link data-testid="link-contacts" to="/contacts">
          Contacts
        </Link>
        <Link data-testid="link-guest" to="/guest">
          Guest
        </Link>
        <Routes>
          <Route path="intro" element={<Intro />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="references" element={<References />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="guest" element={<Guest />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <LanguageSwitcher onChangeLanguage={onChangeLanguage} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p data-testid="main-text">
            Test Review <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
