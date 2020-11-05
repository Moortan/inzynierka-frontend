import axios from 'axios'

const API_URL = 'http://localhost:4202';

export const addTeamService = async(teamLeader, teamName, teamMembers, teamTag, game ) => {
    try {
        return await axios.post(`${API_URL}/teams`, {teamLeader: teamLeader, teamName: teamName,
                                                     teamMembers: teamMembers, teamTag: teamTag, game: game})
    } catch(err) {
        return {
            error: true,
            response: err.response
        }
    }
}
