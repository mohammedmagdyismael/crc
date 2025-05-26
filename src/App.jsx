// index.js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Groups from 'pages/Groups';
import Matches from 'pages/Matches';
import Player from 'pages/Player';
import Moderator from 'pages/Moderator';
import Knockouts from 'pages/Knockouts';
import Landing from 'pages/Landing';
import DevPalettes from 'pages/DevPalettes'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/groups" component={Groups} />
        <Route path="/knockouts" component={Knockouts} />
        <Route path="/schedule" component={Matches} />
        <Route path="/yourmatch" component={Player} />
        <Route path="/matchmoderator" component={Moderator} />

        <Route path="/devpalettes" component={DevPalettes} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;