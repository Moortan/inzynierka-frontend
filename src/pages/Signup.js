import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 
import { userSignupAsync } from '../asyncActions/authAsyncActions';


function Signup() {
    
    const authObj = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { userSignupLoading, signupError, signupSuccess } = authObj;
    
    const email = useFormInput('');
    const username = useFormInput('');
    const password = useFormInput('');

    //handle button for login
    const handleSignup = () => {
        dispatch(userSignupAsync(email.value, username.value, password.value));
    }

    if (signupError) {

    }

    return (
        <div>
            Create new account<br /><br />
            <div>
                Email<br />
                <input type="text" {...email} autoComplete="new-password" />
            </div>
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            <input 
            type="button" 
            style = {{ marginTop: 10}}
            value={userSignupLoading ? 'Loading...' : 'Signup'} 
            onClick={handleSignup} 
            disabled={userSignupLoading} />
            {signupSuccess 
                ? <div  style = {{color: 'green', marginTop: 10 }}> {signupSuccess}</div>
                : <div  style = {{color: 'red', marginTop: 10 }}> {signupError}</div>
            }
        </div>
    );
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

export default Signup;