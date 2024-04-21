import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { GlobalProvider } from './context/globalstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </>
);



