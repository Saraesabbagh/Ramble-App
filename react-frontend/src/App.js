import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path='/profile'>
          <ProfilePage />
        </Route> */}
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/home'> 
          <HomePage />
        </Route>
        <Route path='/journey'>
          <AboutPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
