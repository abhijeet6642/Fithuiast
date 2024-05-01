import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './signIn.css';
import { AppProvider } from './Components'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-fd6b4trveocslemz.us.auth0.com"
    clientId="49KD5fpe66q6F1qafdYQBTENLSViBTQI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <App />
    </AppProvider>
  </Auth0Provider>,
);