import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/root/App'
import "animate.css/animate.min.css";
import "animate.css";
import "./components/i18nextConf.js";
import "./components/i18nextInit.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
