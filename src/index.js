import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './layout/Dashboard/Dashboard.js';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);


reportWebVitals();
