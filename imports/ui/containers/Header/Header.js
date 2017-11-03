import React, { Component } from "react";
import { AppBar, IconButton, FontIcon, Drawer, MenuItem } from "material-ui";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function handleTouchTapMenu() {
    console.log("burger lcickeddddd");
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleMenuToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    onLeftIconButtonTouchTap={this.handleMenuToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({ open })}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/" className="home">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/profile" className="profile">
                            Profile
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/profile/settings" className="settings">
                            Settings
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/login" className="logout">
                            Logout
                        </Link>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;
