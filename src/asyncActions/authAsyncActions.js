import {
    verifyTokenStarted, verifyUserSuccess, verifyTokenEnd,
    userLoginStarted, userLoginFailure, userLogout, userSignupStarted, userSignupFailure, userSignupSuccess, addTeamStarted, addTeamFailure, addTeamSuccess
} from "../actions/authActions";
import { verifyTokenService, userLoginService, userLogoutService, userSignupService } from '../services/auth';
import { addTeamService } from "../services/teams";

//handle verify token
export const verifyTokenAsync = (silentAuth = false) => async dispatch => {
    dispatch(verifyTokenStarted(silentAuth));

    const result = await verifyTokenService();

    if (result.error) {
        dispatch(verifyTokenEnd());
        if (result.response && [401, 403].includes(result.response.status))
            dispatch(userLogout());
        return;
    }

    if (result.status === 204)
        dispatch(verifyTokenEnd());
    else {
        dispatch(verifyUserSuccess(result.data));
    }
}

// handle user login
export const userLoginAsync = (username, password) => async dispatch => {
    dispatch(userLoginStarted());

    const result = await userLoginService(username, password);

    if (result.error) {
        dispatch(userLoginFailure(result.response.data));
        return;
    }

    dispatch(verifyUserSuccess(result.data));
}

// handle user logout
export const userLogoutAsync = () => dispatch => {
    dispatch(userLogout());
    userLogoutService();
}

//handle user signup
export const userSignupAsync = (email, username, password) => async dispatch => {
    dispatch(userSignupStarted());

    const result = await userSignupService(email, username, password);

    if(result.error) {
        dispatch(userSignupFailure(result.response.data.message));
        return;
    }

    dispatch(userSignupSuccess(result.response));
}

//handle adding new team
export const addTeamAsync = ( teamLeader, teamName, teamMembers, teamTag, game) => async dispatch => {
    dispatch(addTeamStarted());

    const result = await addTeamService( teamLeader, teamName, teamMembers, teamTag, game);

    console.log(result);

    if (result.error) {
        dispatch(addTeamFailure(result.response.data.message));
        return;
    }

    dispatch(addTeamSuccess(result.response));
}
