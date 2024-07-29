import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import List from './components/list/List';
import About from './components/about/About';
import Error from './components/error/Error';
import Article from './components/article/Article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/category/0/sorting/date_decreasing/page/1" replace />} />
      <Route path="/category/:categoryId/sorting/:sorting/page/:page" element={<List/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/article/:id" element={<Article/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
);