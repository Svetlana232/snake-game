import React, { Component, Fragment } from "react";
import classes from "./layout.css";
import Toolbar from "./Toolbar";

class Layout extends Component {
    state = {
        
    };


    render() {
        return (
            <Fragment>
                <Toolbar

                />
                <main className={classes.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}

export default Layout;