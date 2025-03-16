import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import MainTemplate from './components/templates/MainTemplate';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import NotFound from './pages/NotFound';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default App;
