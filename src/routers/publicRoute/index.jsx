import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  let isAuth = localStorage.getItem('user');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Redirect to="/user-profile" />;
        } else {
          return <Component {...rest} {...props} />;
        }
      }}
    />
  );
};

export default PublicRoute;
