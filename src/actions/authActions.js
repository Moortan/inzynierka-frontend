import {
    VERIFY_TOKEN_STARTED, VERIFY_USER_SUCCESS, VERIFY_TOKEN_END,
    USER_LOGIN_STARTED, USER_LOGIN_FAILURE, USER_LOGOUT, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS, USER_SIGNUP_STARTED,
    ADD_TEAM_FAILURE, ADD_TEAM_SUCCESS, ADD_TEAM_STARTED
  } from "./actionTypes";

import { setAuthToken } from '../services/auth';

//start to verify token
export const verifyTokenStarted = (silentAuth = false) => {
    return {
        type: VERIFY_TOKEN_STARTED,
        payload: {
            silentAuth
        }
    }
}

//if verify token ends or fails
export const verifyTokenEnd = () => {
    return {
        type: VERIFY_TOKEN_END
    }
}

//if verify token success
export const verifyUserSuccess = ({token, expiredAt, user }) => {
    return {
        type: VERIFY_USER_SUCCESS,
        payload: {
            token,
            expiredAt,
            user
        }
    }
}


//user login starts
export const userLoginStarted = () => {
    return {
        type: USER_LOGIN_STARTED
    }
}

//user login fails
export const userLoginFailure = (error = 'Something went wrong. Please try again later') => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: {
            error
        }
    }
}

export const userLogout = () => {
    setAuthToken();
    return {
        type: USER_LOGOUT
    }
}

export const userSignupStarted = () => {
    return {
        type: USER_SIGNUP_STARTED
    }
}

export const userSignupFailure = (signupError = 'Something went wrong. Please try again later') => {
    return {
        type: USER_SIGNUP_FAILURE,
        payload: {
            signupError
        }
    }
}

export const userSignupSuccess = (signupSuccess = 'You have created new accout. Please log in to continue') => {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: {
            signupSuccess
        }
    }
}

export const addTeamStarted = () => {
    return {
        type: ADD_TEAM_STARTED
    }
}

export const addTeamFailure = (addTeamError = 'Something went wrong. Please try again later') => {
    return {
        type: ADD_TEAM_FAILURE,
        payload: {
            addTeamError
        }    
    }
}

export const addTeamSuccess = (addTeamMessage = 'Team has been created') => {
    return {
        type: ADD_TEAM_SUCCESS,
        payload: {
            addTeamMessage 
        }
    }
}

