import {LOGIN, SIGNUP_USER} from './actions';

const usersReducer = (state = {user: {}}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SIGNUP_USER:
            return {...state}
        case LOGIN:
            localStorage.setItem('userId', payload)
            return {...state}
        default:
            return {...state}
    }
}

export {usersReducer}