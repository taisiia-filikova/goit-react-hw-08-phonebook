import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  authorizationOperations,
  authorizationSelectors,
} from '../../redux/authorization';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authorizationSelectors.getLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    } else if (password.length < 8) {
      return toast.info('Passwords must be at least 8 characters long!');
    }
    dispatch(authorizationOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
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
          Sign up
        </button>
      )}

      {isLoading && <Loader />}
    </form>
  );
}
