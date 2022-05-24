import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-header: white;
    --color-background: #f8f8fa;
    --color-primary-text: #c14d28;
    --color-business-table-text: #67625c;
    --color-business-tile-background: white;
    --color-homepage-table: white;
  }
  body {
    margin: 0;
    background-color: var(--color-background);
    font-family: sans-serif;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>
);