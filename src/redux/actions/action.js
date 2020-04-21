// Action types
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export function fetchUserPending() {
  return {
    type: FETCH_USER_PENDING,
  };
}

export function fetchUserSuccess(data) {
    return {
      type: FETCH_USER_SUCCESS,
      payload: data,
    };
}

export function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
}