import { Button } from 'bootstrap';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formdata from './components/Formdata';
import Formdetail from './components/Formdetail';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formdetail/>} />
          <Route path="/login" element={<Formdata/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
