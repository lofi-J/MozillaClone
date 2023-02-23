import React from 'react';
import ReactDOM from 'react-dom/client';
import {Reset} from 'styled-reset';
import HomePage from './container/HomePage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Reset />
    <HomePage />
  </React.Fragment>
);
