import React from "react";
import classes from "./Toolbar.css";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked} />
        <div className={classes.Logo}></div>
        <nav className={classes.DesktopOnly}>    
        </nav>
    </header>
);

export default toolbar;