import axios from 'axios';
axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:4202';

//bind token to the axios
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

//verify refresh token to generate new access token
export const verifyTokenService = async() => {
    try {
        return await axios.post(`${API_URL}/verifyTokens`);
    }catch (err) {
        return {
            error: true,
            response: err.response
        }
    }
}

//login api
export const userLoginService = async(username, password) => {
    try {
        return await axios.post(`${API_URL}/login`, {email: username, password: password});
    } catch(err) {
        return {
            error: true,
            response: err.response
        }
    }
}

//logout api
export const userLogoutService = async() => {
    try {
        return await axios.post(`${API_URL}/logout`);
    } catch(err) {
        return {
            error: err,
            response: err.response
        }
    }
}

export const userSignupService = async(email, username, password) => {
    try {
        return await axios.post(`${API_URL}/signup`, {email: email, username: username, password: password});
    } catch(err) {
        return {
            error: err,
            response: err.response
        }
    }
}
