import {
    ADD_TEAM_STARTED, ADD_TEAM_FAILURE, ADD_TEAM_SUCCESS
} from "../actions/actionTypes";

// define initial state of auth reducer
const initialState = {
    team: null, //manage team details
    addTeamLoading: false, //to indicate that the adding team API is in progress
    addTeamError: null, //manage the error of the adding team API
    addTeamMessage: null


    // token: null, // manage the access token
    // expiredAt: null, // manage expiry time of the access token
    // user: null, // manage the user details
    // authLoading: true, // to indicate that the auth API is in progress
    // isAuthenticated: false, // consider as a authentication flag
    // userLoginLoading: false, // to indicate that the user signin API is in progress
    // userSignupLoading: false, //to indicate that the user signup API is in progress
    // loginError: null, // manage the error of the user signin API
    // signupError: null, //manage the error of the user signup API 
    // signupSuccess: null //manage the scuccess message of the signup
}

const team = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEAM_STARTED:
            return {
                ...state,
                addTeamLoading: true
            }
        case ADD_TEAM_FAILURE:
            const {addTeamError} = action.payload
            return {
                ...state,
                addTeamLoading: false,
                addTeamError: addTeamError
            }
        case ADD_TEAM_SUCCESS:
            const {addTeamMessage, team} = action.payload
            return {
                ...state,
                addTeamLoading: false,
                addTeamMessage: addTeamMessage,
                team: team
            }
            
        default:
        return state
    }

}

export default team;


