import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Storage } from './context/formContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Storage>
      <App />
    </Storage>
  </React.StrictMode>,
  document.getElementById('root')
);

