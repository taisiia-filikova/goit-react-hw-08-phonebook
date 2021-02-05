import { createAction } from '@reduxjs/toolkit';
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  FILTER_CONTACT,
} from './contacts-types';

export const fetchContactsRequest = createAction(FETCH_CONTACTS_REQUEST);
export const fetchContactsSuccess = createAction(FETCH_CONTACTS_SUCCESS);
export const fetchContactsError = createAction(FETCH_CONTACTS_ERROR);

export const addContactRequest = createAction(ADD_CONTACT_REQUEST);
export const addContactSuccess = createAction(ADD_CONTACT_SUCCESS);
export const addContactError = createAction(ADD_CONTACT_ERROR);

export const deleteContactRequest = createAction(DELETE_CONTACT_REQUEST);
export const deleteContactSuccess = createAction(DELETE_CONTACT_SUCCESS);
export const deleteContactError = createAction(DELETE_CONTACT_ERROR);

export const filterContact = createAction(FILTER_CONTACT);
