import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
