import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import AppName from '../../Constants';

const Instructions = () => {
    useEffect(() => {
        document.title = `${AppName} - Instructions` ;
    });
    return (
        <div className="main-div" style={{ maxWidth: '80%' }}>
            <div className="panel">
                <h1><small>"Welcome to SEED IT IDOl 2019"</small><br /> Bala Saheb</h1>
                <hr />
            </div>
            <form id="Login" className="text-left">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Instructions for the candidate :</h5>
                        <ul>
                            <li>
                                Instructions 1
                        </li>
                            <li>
                                Instructions 2
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link className="btn btn-primary" to="/qa"> Start Exam</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Instructions;
