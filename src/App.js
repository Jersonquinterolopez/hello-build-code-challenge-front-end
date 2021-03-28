import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import Calendar from './features/events/calendar/index.';
import Repositories from './features/repos/repositories';
import Dashboard from './pages/Dashboard';
import UserContext from './context/userContext';
import DashboardContext from './context/dashboardContext';

function App() {
  const [user, setUser] = useState('');
  const [sessionData, setSessionData] = useState([]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <DashboardContext.Provider value={{ sessionData, setSessionData }}>
            <Dashboard>
              <Route path="/calendar" component={Calendar} />
              <Route path="/github_section" component={Repositories} />
            </Dashboard>
          </DashboardContext.Provider>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
