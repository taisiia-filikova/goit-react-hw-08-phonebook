import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  authorizationOperations,
  authorizationSelectors,
} from '../../redux/authorization';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Loader from '../../components/Loader/Loader';
import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authorizationSelectors.getLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    }
    dispatch(authorizationOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={s.text}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={s.text}
      />
      {!isLoading && (
        <button className={s.button} type="submit">
          Log in
        </button>
      )}

      {isLoading && <Loader />}
    </form>
  );
}
