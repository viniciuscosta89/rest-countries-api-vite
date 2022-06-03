import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from './hooks/ThemeContext';
import { CountryProvider } from './hooks/CountryContext';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CountryProvider>
        <Header />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CountryProvider>
    </CustomThemeProvider>
  </React.StrictMode>
)
