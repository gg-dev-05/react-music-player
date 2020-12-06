import './App.css';
// import Home from './Views/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ResponsiveDrawer from './Components/Drawer';
import Home from './Views/Home';
import Logs from './Views/Login';
import Search from './Components/Search'


function App() {
  return (
    <div className="fill">

      <Router>

        <Switch>
          <Route exact path="/">
            <Home />

          </Route>

          <Route exact path="/search">
            <Search />

          </Route>

          <Route exact path="/login">
            <Logs />
          </Route>

          <Route exact path="/app">
            {/* <Player /> */}
            <ResponsiveDrawer />
          </Route>

          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
