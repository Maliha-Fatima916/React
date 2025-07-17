//This file is the starting point of your React app
// it connects your React world to the real HTML page (index.html)
// it fetches the JSX code return by App() ( and render it into index.html )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React,ReactDOM => libraries
// App is imported here to get the JSX code return by App()
// DOM => Tree structure , React creates its own DOM called Virtual DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

