import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Movies from './components/Movies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Favourites from './components/Favourites';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact render={(props) => (
          <>
            <Banner {...props} />
            <Movies {...props} />
          </>
        )} />
        <Route path='/favourites' component={ Favourites}/>
      </Switch>
    </Router>
  );
}

export default App;
