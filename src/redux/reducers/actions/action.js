// Action types
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING
    }
}

function fetchUserSuccess(users) {
    return {
        type: FETCH_USER_SUCCESS 
        users: products
    }
}

function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR
        error: error
    }
}