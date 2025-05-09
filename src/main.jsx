import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LightEffect } from './components/ThemeBackground';

document.documentElement.style.setProperty('--mouse-x', '50%');
document.documentElement.style.setProperty('--mouse-y', '50%');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LightEffect />
    <App />
  </React.StrictMode>
);