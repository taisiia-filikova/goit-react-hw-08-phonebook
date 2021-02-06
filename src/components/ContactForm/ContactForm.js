import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';

import Loader from '../Loader/Loader';
import s from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`${name} is already in phonebook.`);
    } else if (checkRepeatNumber(number)) {
      return toast(`${number} is already in phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info('Enter the name and phone number!');
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter the name"
        />
      </label>
      <label className={s.label}>
        Number
        <NumberFormat
          placeholder="Enter the phone number"
          format="(###) ###-##-##"
          mask="_"
          pattern="^[0-9\s\(\)\-]{15}"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>

      {!isLoading && (
        <button className={s.button} type="submit">
          Add contact
        </button>
      )}

      {isLoading && <Loader />}
    </form>
  );
}

export default ContactForm;
