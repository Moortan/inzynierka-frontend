import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Signup from './pages/Signup';
import AddTeam from './pages/AddTeam';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import { verifyTokenAsync } from './asyncActions/authAsyncActions';



function App() {

  const authObj = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { authLoading, isAuthenticated } = authObj;

  useEffect(() => {
    dispatch(verifyTokenAsync());
  }, []);

  if (authLoading) {
    return <div className="content"> Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/"> Home </NavLink>
            <NavLink activeClassName="active" to="/login"> Login </NavLink>
            <NavLink activeClassName="active" to="/signup"> Signup</NavLink>
            <NavLink activeClassName="active" to="/Profile"> Profile</NavLink>
            <NavLink activeClassName="active" to="/AddTeam"> Add Team</NavLink>

        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/signup" component={Signup} isAuthenticated={isAuthenticated} />
            <PublicRoute path="/login" component={Login} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/Profile" component={Profile} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/AddTeam" component={AddTeam} isAuthenticated={isAuthenticated} />

            <Redirect to={isAuthenticated ? '/Profile' : '/login'} />
          </Switch>
        </div>
        </div>
      </BrowserRouter>
    </div >

  )
}

export default App;
