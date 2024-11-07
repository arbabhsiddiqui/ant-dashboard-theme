import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';

// local imports
import App from './App.jsx';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{ cssVar: true }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
