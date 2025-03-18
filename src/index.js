import React from 'react';
import ReactDOM from 'react-dom/client'; // ملاحظة: استخدام 'react-dom/client' بدلاً من 'react-dom'
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
