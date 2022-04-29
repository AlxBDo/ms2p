import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/themeContext';
import { ContactMeProvider } from './utils/contactMeContext';
import { GlobalStyle } from './style';
import Header from './components/header';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import CV from './pages/cv';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <ContactMeProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/cv" element={<CV />} />
          </Routes>
        </ContactMeProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
