import React from "react";
import classes from './Toolbar.css';
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";

const toolbar = (props) => {
    return (
        <header id="header" className={classes.Toolbar} style={{}}>

            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="109%" />
            <nav className={classes.DesktopOnly}>
                <NavItems isAuthenticated={props.isAuth} />
            </nav>
          

        </header>
    )
}

export default toolbar