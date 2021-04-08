import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import Calendar from './features/events/calendar/index.';
import Repositories from './features/repos/repositories';
import UserProfile from './features/user/UserProfile';
import Dashboard from './pages/Dashboard';
import StoreProvider from './store/StoreProvider';
import PublicRoute from './routers/publicRoute';
import ProtectedRoute from './routers/protectedRoute';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/sign-up" component={SignUp} />
          <Dashboard>
            <ProtectedRoute path="/calendar" component={Calendar} />
            <ProtectedRoute path="/github_section" component={Repositories} />
            <ProtectedRoute path="/user-profile" component={UserProfile} />
          </Dashboard>
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
