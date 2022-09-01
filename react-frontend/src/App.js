import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from './components/pages/IndexPage';
import { NewUserPage } from './components/pages/NewUserPage';
import './App.css';
// import { Navbar } from './components/atomic-components/Navbar';
// import { Page } from './components/pages/Page'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        
          <Route path='/' element={<IndexPage />} />

          <Route path='/user/new' element={<NewUserPage />} />
          
        
      </Routes>
   </BrowserRouter>     
  </div> 
 );
}

export default App;
