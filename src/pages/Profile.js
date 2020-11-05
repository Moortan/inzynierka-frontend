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

  const getUserTeams = async() => {
    const result = await getUserTeamsService();
    if (result.error) {
      dispatch(verifyTokenEnd());
      if (result.response && [401, 403].includes(result.response.status))
        dispatch(userLogout());
      return;
    }
    setUserTeams(result.data);
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
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
      <pre>{JSON.stringify(userTeams, null, 2)} </pre>
    </div>
  );
}
 
export default Profile;