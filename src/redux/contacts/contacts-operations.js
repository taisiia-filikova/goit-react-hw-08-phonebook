import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';
import { toast } from 'react-toastify';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => {
      dispatch(fetchContactsError(error));

      if (error.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (error.response.status === 500) {
        toast.error('Server error! Please try later.');
      } else {
        toast.error('Something went wrong! Please wait and reload the page!');
      }
    });
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => {
      dispatch(addContactError(error));

      if (error.response.status === 400) {
        toast.error('Contact creation error!');
      } else {
        toast.error('Something went wrong! Please wait and reload the page!');
      }
    });
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => {
      dispatch(deleteContactError(error));

      if (error.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (error.response.status === 500) {
        toast.error('Server error! Please try later.');
      } else {
        toast.error('Something went wrong! Please wait and reload the page!');
      }
    });
};
