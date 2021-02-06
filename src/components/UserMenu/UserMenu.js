import { useSelector, useDispatch } from 'react-redux';
import {
  authorizationSelectors,
  authorizationOperations,
} from '../../redux/authorization';
import defaultAvatar from '../../img/user.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authorizationSelectors.getUserName);

  return (
    <div className={s.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="50"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>

      <button
        className={s.button}
        type="submit"
        onClick={() => dispatch(authorizationOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
