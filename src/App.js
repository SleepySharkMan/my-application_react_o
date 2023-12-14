import React from 'react';
import "./styles/style.css";
import data from './data';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home sectionData={data.sectionData} />} />
        <Route path="/catalog/:title" element={<Catalog/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
