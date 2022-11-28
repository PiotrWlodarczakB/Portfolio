import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import Navbar from './Header/Navbar';
import "./styles.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <MainPage />
  </React.StrictMode>
);
