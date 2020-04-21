import {FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/action'

const initialState = {
  pending: false,
  users: new Map(),
  error: null,
};

const reducers = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_USER_SUCCESS:
      newState.users = new Map();
      action.payload.map((val) =>
        newState.users.set(
          `${val.name.title} ${val.name.first} ${val.name.last}`,
          val
        )
      );
      return newState

    case FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducers;
