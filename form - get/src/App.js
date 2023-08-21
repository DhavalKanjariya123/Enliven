import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formdataget from './components/Formdataget';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formdataget/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
