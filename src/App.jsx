// index.js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Player from 'pages/Player';
import Moderator from 'pages/Moderator';
import Knockouts from 'pages/Knockouts';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/knockouts" component={Knockouts} />
        <Route path="/yourmatch" component={Player} />
        <Route path="/matchmoderator" component={Moderator} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;