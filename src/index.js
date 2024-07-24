import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/list/List';
import About from './components/about/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
);