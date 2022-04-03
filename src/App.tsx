import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@emotion/react';
import i18n from './services/i18n';
import { theme } from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const Missing = () => <h1>Missing</h1>;

export const pageRoutes: Array<any> = [
  { id: 'home', component: Home, route: '/' },
  { id: 'about', component: About, route: '/about' },
  { id: 'accommodation', component: Accommodation, route: '/accommodation' },
  { id: 'contact', component: Contact, route: '/contact' },
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
          <Header onChangeLanguage={onChangeLanguage}></Header>
          <Routes>
            {pageRoutes.map(({ id, route, component: Component }) => (
              <Route path={route} element={<Component />} key={id} />
            ))}
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer></Footer>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
