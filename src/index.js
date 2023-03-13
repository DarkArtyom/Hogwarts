import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'Styles/GlobalStyles';

const theme = {
  bodyColor: '#1c1c1c',
  mainColor: '#fff',
  secondaryColor: '#b6b6b6',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
