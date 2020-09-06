import React from 'react';

import {Link} from 'react-router-dom';


import './QA.css';

const QA = () => (
    <div className="main-div">
        <form className="text-left">
            <div className="row">
                <div className="col-lg-4 col-md-4" style={{ 'border': '1px solid #eee', 'padding': '20px' }}>
                    <div className="row">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">01</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">02</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">03</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">04</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">05</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">06</button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">01</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">02</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">03</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">04</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">05</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">06</button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">01</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">02</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">03</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">04</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">05</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">06</button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">01</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">02</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">03</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">04</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">05</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">06</button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">01</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">02</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">03</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">04</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">05</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-default">06</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <button id="btn-default" type="button" className="btn btn-default text-dark mt-150">Prev</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary mt-150">Next</button>
                        </div>
                        <div className="col-md-4">
                            <Link to="/result" type="button" className="btn btn-danger mt-150">Finish</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Q.1 What is HTML?
                            </div>
                        <div className="card-body" style={{ minHeight: '400px' }}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Hyper Text Markup Language
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Hyper Text Markup Logic
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Hyper Text Markup Language
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Hyper Text Markup Logic
                                    </label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button type="button" className="btn btn-success">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
)

export default QA;
