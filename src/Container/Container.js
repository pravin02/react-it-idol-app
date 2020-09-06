import React from 'react';

import './Container.css';

const Container = (props) => (
    <div className="container">
        <div className="login-form">
            {props.children}
        </div>
    </div>
)

export default Container;
