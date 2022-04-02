import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IntlProvider, useIntl } from 'react-intl';
import { ThemeProvider } from '@emotion/react';
import i18n from './services/i18n';
import { theme } from './theme';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './pages/Home';

const About = () => <h1>About</h1>;
const Accommodation = () => <h1>Accommodation</h1>;
const Contacts = () => <h1>Contacts</h1>;
const Missing = () => <h1>Missing</h1>;

export const pageRoutes: Array<any> = [
  { id: 'home', component: Home, route: '/' },
  { id: 'about', component: About, route: '/about' },
  { id: 'accommodation', component: Accommodation, route: '/accommodation' },
  { id: 'contacts', component: Contacts, route: '/contacts' },
];

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
          <ResponsiveAppBar
            onChangeLanguage={onChangeLanguage}
          ></ResponsiveAppBar>
          <Routes>
            {pageRoutes.map(({ id, route, component: Component }) => (
              <Route path={route} element={<Component />} key={id} />
            ))}
            <Route path="*" element={<Missing />} />
          </Routes>
          {/* <Footer></Footer> */}
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
