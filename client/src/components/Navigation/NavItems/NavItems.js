import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" exact>Home</NavItem>
            <NavItem link="/about" >About</NavItem>
            <NavItem link="/price_predictor" >Price Predictor</NavItem>
            <NavItem link="/reviews">Reviews</NavItem>
            { !props.isAuthenticated 
                ? <NavItem link="/auth">Login/Sign Up</NavItem>
                : <NavItem link="/logout" >Log Out</NavItem> }
            

        </ul>
    )
}

export default navItems