import React from 'react';

import { Link } from 'react-router-dom';

import './Result.css';

const Result = () => (
    <div className="main-div">
        <div className="panel">
            <h1>Exam Finished Successfully...</h1>
            <hr />
        </div>
        <div className="text-left">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h5>Start New Session</h5>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <Link to="/" className="btn btn-primary">Login </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/register" className="btn btn-primary"> Register </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Result;
