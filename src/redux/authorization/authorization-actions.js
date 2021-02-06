import { createAction } from '@reduxjs/toolkit';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './authorization-types';

export const registerRequest = createAction(REGISTER_REQUEST);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerError = createAction(REGISTER_ERROR);

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginError = createAction(LOGIN_ERROR);

export const logoutRequest = createAction(LOGOUT_REQUEST);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutError = createAction(LOGOUT_ERROR);

export const getCurrentUserRequest = createAction(GET_USER_REQUEST);
export const getCurrentUserSuccess = createAction(GET_USER_SUCCESS);
export const getCurrentUserError = createAction(GET_USER_ERROR);
