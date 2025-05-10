import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LightEffect } from './components/ThemeBackground';

const root = document.documentElement;
root.style.setProperty('--mouse-x', '50%');
root.style.setProperty('--mouse-y', '50%');

window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) * 100 + '%';
  const y = (e.clientY / window.innerHeight) * 100 + '%';
  root.style.setProperty('--mouse-x', x);
  root.style.setProperty('--mouse-y', y);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LightEffect />
    <App />
  </React.StrictMode>
);
