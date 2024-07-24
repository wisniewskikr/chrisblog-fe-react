import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './AppRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppRoute/>
  </Router>
);