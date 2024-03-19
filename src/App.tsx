import React, { Suspense } from 'react';
import './App.css';
import HomePage from './Page';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from './routes';

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>

          {renderRoutes()}


        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
