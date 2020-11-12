import Cookies from "universal-cookie"
const cookies = new Cookies();


export const getToken = () => {
    return cookies.get('x-access-token');
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}