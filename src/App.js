import React from 'react';
import Header from './sections/header';
import Home from './sections/home';
import { Routes, Route } from 'react-router-dom';
import Abc from './sections/abc.js';
export default function App() {
  return (
    <div style={{ margin: '5px' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<Abc />} />
      </Routes>
    </div>
  );
}
