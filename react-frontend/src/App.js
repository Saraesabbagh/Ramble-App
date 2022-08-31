import React from 'react';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'views/indexPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        {/* <Route path='/profile'>
          <ProfilePage />
        </Route> */}
        <Route path='/'>
          <indexPage />
        </Route>
        {/* <Route path='/home'> 
          <HomePage />
        </Route>
        <Route path='/journey'>
          <JourneyPage />
        </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
