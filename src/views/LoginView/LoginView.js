import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  authorizationOperations,
  authorizationSelectors,
} from '../../redux/authorization';
import { toast } from 'react-toastify';
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
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        E-mail
        <input
          className={s.input}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your e-mail"
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </label>
      {!isLoading && (
        <button className={s.button} type="submit">
          Log in
        </button>
      )}

      {isLoading && <Loader />}
    </form>
  );
}
