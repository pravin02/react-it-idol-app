import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import AppName from '../../Constants';

const Login = () => {

    useEffect(() => {
        document.title = `${AppName} - Login`;
    });

    return (
        <div className="main-div" style={{ maxWidth: '50%' }}>
            <div className="panel">
                <h1>Login into your portal</h1>
                <p>Please enter your email and password</p>
            </div>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                <div className="forgot"> </div>
                <Link className="btn btn-primary" to="/instructions">Login</Link>
            don't have an account ? <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login;
