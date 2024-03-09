import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

import { FontsStyles, GlobalStyles } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FontsStyles />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
