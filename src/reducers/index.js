import { combineReducers } from 'redux';
import auth from './authReducer'
import team from './teamReducer'

const appReducer = combineReducers({
    auth,
    team
});

export default appReducer;