import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return "loading"
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) => user.email ? children : <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}
      >
      </Route>
    </div>
  );
};

export default PrivetRoute;