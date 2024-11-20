import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons

import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider >
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
