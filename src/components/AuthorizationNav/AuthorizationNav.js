import { NavLink } from 'react-router-dom';
import s from './AuthorizationNav.module.css';

const AuthorizationNav = () => (
  <div>
    <NavLink to="/register" exact className={s.link} activeClassName={s.active}>
      Sign up
    </NavLink>
    <NavLink to="/login" exact className={s.link} activeClassName={s.active}>
      Log in
    </NavLink>
  </div>
);

export default AuthorizationNav;
