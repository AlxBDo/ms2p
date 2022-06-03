import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/themeContext'
import { ContactMeProvider } from './utils/contactMeContext'
import { GlobalStyle } from './style'
import Loader from './components/loader'

const ContactMe = lazy( () => import('./components/contactMe'))
const Home = lazy( () => import('./pages/home'))
const Portfolio = lazy( () => import('./pages/portfolio'))
const CV = lazy( () => import('./pages/cv'))

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <ContactMeProvider>
          <Suspense fallback={<Loader />}>
            <ContactMe />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/cv" element={<CV />} />
            </Routes>
          </Suspense>
        </ContactMeProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

