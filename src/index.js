import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'contador/src/App.js';
import ItemListContainer from './containers/ItemListContainers';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

