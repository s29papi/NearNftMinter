import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initContract } from './utility/utils'

initContract()
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
});



