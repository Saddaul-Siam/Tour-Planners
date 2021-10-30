import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />
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