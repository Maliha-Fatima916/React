//This file is the starting point of your React app
// it connects your React world to the real HTML page (index.html)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React,ReactDOM => libraries

// DOM => Tree structure , React creates its own DOM called Virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

