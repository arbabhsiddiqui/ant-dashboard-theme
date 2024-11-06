import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

// local imports
import App from './App.jsx';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={{ cssVar: true }}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
