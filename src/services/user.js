import axios from 'axios'

const API_URL = 'http://localhost:4202';

export const getUserProfileService = async() => {
    try {
        return await axios.get(`${API_URL}/profile`)
    } catch(err) {
        return {
            error: true,
            response: err.response
        }
    }
}

export const getUserTeamsService = async() => {
    try {
        return await axios.get(`${API_URL}/myteams`)
    } catch(err) {
        return {
            error: true,
            response: err.response
        }
    }
}