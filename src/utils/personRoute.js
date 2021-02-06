import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationSelectors } from '../redux/authorization';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authorizationSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
