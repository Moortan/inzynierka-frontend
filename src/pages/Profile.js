import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { verifyTokenAsync, userLogoutAsync } from "../asyncActions/authAsyncActions";
import { userLogout, verifyTokenEnd } from "../actions/authActions";

import { setAuthToken } from '../services/auth';
import { getUserProfileService, getUserTeamsService } from '../services/user';

function Profile() {

  const dispatch = useDispatch();
  const authObj = useSelector(state => state.auth);

  const { user, token, expiredAt } = authObj;
  const [userProfile, setUserProfile] = useState([]);
  const [userTeams, setUserTeams] = useState([]);

  // handle click event of the logout button
  const handleLogout = () => {
    dispatch(userLogoutAsync());
  }

  // get user profile
  const getUserProfile = async () => {
    const result = await getUserProfileService();
    if (result.error) {
      dispatch(verifyTokenEnd());
      if (result.response && [401, 403].includes(result.response.status))
        dispatch(userLogout());
      return;
    }
    setUserProfile(result.data);
  }

  const getUserTeams = async () => {
    const result = await getUserTeamsService();
    if (result.error) {
      dispatch(verifyTokenEnd());
      if (result.response && [401, 403].includes(result.response.status))
        dispatch(userLogout());
      return;
    }
    setUserTeams(result.data.teams);
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

  // get user items on page load
  useEffect(() => {
    getUserProfile();
    getUserTeams();
  }, []);

  return (
    <div>
      Welcome {user.username}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" /><br /><br />
      <b>User Data:</b>
      <p> Email: {userProfile.email} </p>
      <p> Username: {userProfile.name} </p>
      <br />
      <b> Your Teams: </b>
      <b> </b>
      <p id="teams"> </p>
      {userTeams.map((value, index) => {
        return (
          <li key={index}> <br />
          Team Name: {value.teamName} <br />
          Team Tag: {value.teamTag} <br />
          Team Members: {value.teamMembers[0]}, {value.teamMembers[1]},
          {value.teamMembers[2]}, {value.teamMembers[3]}, {value.teamMembers[4]} <br />
          Game: {value.game} <br />

          </li>
        )
      })}
    </div>
  );
}

export default Profile;