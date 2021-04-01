import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import Calendar from './features/events/calendar/index.';
import Repositories from './features/repos/repositories';
import UserProfile from './features/user/UserProfile';
import Dashboard from './pages/Dashboard';
import StoreProvider from './store/StoreProvider';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Dashboard>
            <Route path="/calendar" component={Calendar} />
            <Route path="/github_section" component={Repositories} />
            <Route path="/user-profile" component={UserProfile} />
          </Dashboard>
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
