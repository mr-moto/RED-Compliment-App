import React, { Component } from "react";
import {
    AppBar,
    IconButton,
    FontIcon,
    Drawer,
    MenuItem,
    Divider,
    FlatButton,
    SvgIcon,
    Menu
} from "material-ui";
import { Link } from "react-router-dom";

import "./styles";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleMenuToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    logOut = () => {
        Meteor.logout();
        this.setState({ open: false });
    };
    render() {
        return (
            <div className="appbar-wrapper">
                <AppBar
                    style={{ background: "#ed4242" }}
                    onRightIconButtonTouchTap={this.handleMenuToggle}
                    iconElementLeft={
                        <Link to="/">
                            <img
                                className="logo"
                                src="/images/logo_kindred.svg"
                                alt="Kindred"
                                style={{ height: "8vh" }}
                            />
                        </Link>
                    }
                    iconElementRight={
                        <IconButton>
                            <i className="material-icons">menu</i>
                        </IconButton>
                    }
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({ open })}
                    openSecondary={true}
                    className="drawer"
                    containerStyle={{ background: "rgba(53, 53, 53, 0.9" }}
                >
                    <div className="sideMenuItems">
                        <div>
                            <MenuItem
                                className="menu-item"
                                onClick={this.handleClose}
                            >
                                <Link to="/" className="menu">
                                    <span className="arrow">></span> Home
                                </Link>
                            </MenuItem>
                            <Divider style={{ backgroundColor: "#ed4242" }} />
                            <MenuItem
                                className="menu-item"
                                onClick={this.handleClose}
                            >
                                <Link to="/profile" className="menu">
                                    <span className="arrow">></span> Profile
                                </Link>
                            </MenuItem>
                            <Divider style={{ backgroundColor: "#ed4242" }} />
                            <MenuItem
                                className="menu-item"
                                onClick={this.handleClose}
                            >
                                <Link to="/profile/settings" className="menu">
                                    <span className="arrow">></span> Settings
                                </Link>
                            </MenuItem>
                        </div>
                        <div>
                            <Divider style={{ backgroundColor: "#ed4242" }} />
                            <MenuItem
                                className="menu-item"
                                onClick={this.logOut}
                            >
                                <Link to="/login" className="menu">
                                    <span className="arrow">></span> Logout
                                </Link>
                            </MenuItem>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Header;
