import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


import { verifyTokenAsync } from "../asyncActions/authAsyncActions";
import { setAuthToken } from '../services/auth';



import { addTeamAsync } from '../asyncActions/authAsyncActions'


function AddTeam() {

    const dispatch = useDispatch();
    const teamObj = useSelector(state => state.team);
    const authObj = useSelector(state => state.auth);

    const { addTeamLoading, addTeamError, addTeamMessage} = teamObj;
    const { user, token, expiredAt } = authObj;

    const teamName = useFormInput('');
    const teamTag = useFormInput('');
    const game = useFormInput('');
    const teamMember1 = useFormInput('');
    const teamMember2 = useFormInput('');
    const teamMember3 = useFormInput('');
    const teamMember4 = useFormInput('');
    const teamMember5 = useFormInput('');

    const teamMembers = [teamMember1.value, teamMember2.value,
    teamMember3.value, teamMember4.value, teamMember5.value]

    const handleAddTeam = () => {
        dispatch(addTeamAsync(user.username, teamName.value, teamMembers,
            teamTag.value, game.value))
    }

    // set timer to renew token
    useEffect(() => {
        setAuthToken(token);
        const verifyTokenTimer = setTimeout(() => {
            dispatch(verifyTokenAsync(true));
        }, moment(expiredAt).diff() - 10 * 1000);
        return () => {
            clearTimeout(verifyTokenTimer);
        }
    }, [expiredAt, token])

    return (

        <div>
            Add a new team <br /><br />
            <div>
                Team Name <br />
                <input type="text" {...teamName} autoComplete="off" />
            </div>
            <div style={{ marginTop: 10 }}>
                Team Tag <br />
                <input type="text" {...teamTag} autoComplete="off" />
            </div>
            <div style={{ marginTop: 10 }}>
                Game <br />
                <input type="radio" {...game} value = "League of Legends" name = "game" autoComplete="off" /> League of Legends <br />
                <input type="radio" {...game} value = "Counter Strike: Global Offensive"name = "game" autoComplete="off" /> Couter Strike: Global Offensive <br />
                <input type="radio" {...game} value = "Dota 2"name = "game" autoComplete="off" /> Dota 2 <br />
            </div>
            <div style={{ marginTop: 10 }}>
                Team Member #1 <br />
                <input type="text" {...teamMember1} autoComplete="off" /><br />
                Team Member #2 <br />
                <input type="text" {...teamMember2} autoComplete="off" /><br />
                Team Member #3 <br />
                <input type="text" {...teamMember3} autoComplete="off" /><br />
                Team Member #4 <br />
                <input type="text" {...teamMember4} autoComplete="off" /><br />
                Team Member #5 <br />
                <input type="text" {...teamMember5} autoComplete="off" /><br />
            </div>
            <input
                type="button"
                style={{ marginTop: 10 }}
                value={addTeamLoading ? 'Adding...' : 'Add new team'}
                onClick={handleAddTeam}
                disabled={addTeamLoading} />
            {addTeamMessage 
                ? <div  style = {{color: 'green', marginTop: 10 }}> {addTeamMessage}</div>
                : <div  style = {{color: 'red', marginTop: 10 }}> {addTeamError}</div>
            }
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default AddTeam;