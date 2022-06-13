import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{padding: '6px 6px 6px 30px', height: props.height, boxSizing: 'border-box', marginBottom: props.mb, display: props.visible}}>
            <NavLink to="/" className={classes.NavLogo}>
                <span>
                    Housify
                    <small className={classes.Span}>Price Predictor</small>
                </span>
            </NavLink>
        </div>
    )
}

export default logo