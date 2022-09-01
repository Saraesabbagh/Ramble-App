import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from './components/pages/IndexPage';
import { NewUserPage } from './components/pages/NewUserPage';
import { NewSessionPage } from './components/pages/NewSessionPage';
import { Mission } from './components/pages/Mission'

import './App.css';
// import { Navbar } from './components/atomic-components/Navbar';
// import { Page } from './components/pages/Page'


function App() {
  return (
    <div className= "App">
    <BrowserRouter>
    <Routes>
        
          <Route path='/' element={<IndexPage />} />
          <Route path='/user/new' element={<NewUserPage />} />
          <Route path='/session/new' element={<NewSessionPage />} />
          <Route path='/mission' element={<Mission />} />     
      </Routes>
   </BrowserRouter>     
  </div> 
 );
}

export default App;
