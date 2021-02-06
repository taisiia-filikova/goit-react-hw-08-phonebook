import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthorizationNav from '../AuthorizationNav/AuthorizationNav';
import { authorizationSelectors } from '../../redux/authorization';
import s from './AppBar.module.css';

export default function Appbar() {
  const isLoggedIn = useSelector(authorizationSelectors.getIsAuthenticated);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthorizationNav />}
    </header>
  );
}
