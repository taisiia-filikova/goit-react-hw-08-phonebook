import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
