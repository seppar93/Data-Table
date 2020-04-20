import {FETCH_USER_PENDING,FETCH_USER_SUCCESS,FETCH_USER_ERROR } from './actions/action'

const initialState = {
  pending: false,
  users: new Map(),
  error: null
}


