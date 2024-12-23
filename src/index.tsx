import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Szamolo from './Pages/Szamolo';
import Atvalto from './Pages/Atvalto';
import Hiba from './Pages/Hiba';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/szamolo' element={<Szamolo />}/>
      <Route path='/' element = {<App/>}/>
      <Route path='/atvalto' element = {<Atvalto/>}/>
      <Route path='*' element = {<Hiba/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
