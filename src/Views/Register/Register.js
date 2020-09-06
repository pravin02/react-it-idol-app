import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => (
    <div className="main-div">
        <div className="panel">
            <h1>Signup</h1>
            <p>Please register you personal details</p>
        </div>

        <form>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputContact" placeholder="Enter Contact Number" />
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email Address" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="password" className="form-control" id="inputContact" placeholder="Enter Password" />
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <select className="form-control" style={{ 'height': 'calc(3.0rem + 2px)' }}>
                            <option>Select Gender </option>
                            <option>Male </option>
                            <option>Female </option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <select className="form-control" style={{ 'height': 'calc(3.0rem + 2px)' }}>
                            <option>Select College </option>
                            <option>MJ College Jalgaon </option>
                            <option>Iqra College Jalgaon </option>
                        </select>
                    </div>
                </div>


            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <select className="form-control" style={{ 'height': 'calc(3.0rem + 2px)' }}>
                            <option>Select Qualification </option>
                            <option>B.Sc </option>
                            <option>Diploma </option>
                            <option>B.E </option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <select className="form-control" style={{ 'height': 'calc(3.0rem + 2px)' }}>
                            <option>Select Stream </option>
                            <option>C.S </option>
                            <option>I.T </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                <Link to="/" className="btn btn-primary"> Register </Link>
                </div>
                <div className="col-md-4">
                    already have an account?
                    <Link to="/"> Login </Link>
                </div>
            </div>
        </form>
    </div>
)

export default Register;
