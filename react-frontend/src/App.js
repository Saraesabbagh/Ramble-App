import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from './components/pages/IndexPage';
import { NewUserPage } from './components/pages/NewUserPage';
import { NewSessionPage } from './components/pages/NewSessionPage';
import { HomePage } from './components/pages/HomePage';
import { Mission } from './components/pages/Mission';
import { AppFunctionality } from './components/pages/AppFunctionality';
import { NewJourneyPage } from './components/pages/NewJourneyPage';
import { Profile } from './components/pages/Profile'

function App() {
  const [user, setUser] = React.useState([])
  return (
    <div className= "App">
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/user/new' element={<NewUserPage />} />
          <Route path='/session/new' element={<NewSessionPage setUser={setUser} />} />
          <Route path='/home' element={<HomePage user={user}/>} /> 
          {/* need to send props of user details into this home page. */}
          <Route path='/mission' element={<Mission />} />  
          <Route path='/app' element={<AppFunctionality />} />   
          <Route path='/journey/new' element={<NewJourneyPage user={user}/>} /> 
          <Route path='/profile' element={<Profile />} />
      </Routes>
   </BrowserRouter>     
  </div> 
 );
}

export default App;
