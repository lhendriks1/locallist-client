import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../constants"

const defaultState = {
    isLoading: false,
    userData: {},
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOGIN_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                userProfile: action.payload
            };
        case USER_LOGIN_FAIL: 
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state
    };
};

export default user;