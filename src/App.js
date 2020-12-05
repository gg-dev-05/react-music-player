import './App.css';
// import Home from './Views/Home'
import Player from './Views/Player'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ResponsiveDrawer from './Components/Drawer';
import Home from './Views/Home';
import Logs from './Views/Login';


function App() {
  return (
    <div>

      <Router>

        <Switch>
          <Route exact path="/">
            <Home />

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
