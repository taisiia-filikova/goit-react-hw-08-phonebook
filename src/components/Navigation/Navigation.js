import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationSelectors } from '../../redux/authorization';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authorizationSelectors.getIsAuthenticated);

  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.link} activeClassName={s.active}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
