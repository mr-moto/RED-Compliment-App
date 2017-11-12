import React, { Component } from "react";
import { AppBar, IconButton, FontIcon, Drawer, MenuItem } from "material-ui";
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
      <div>
        <AppBar
          style={{ background: "#ed4242" }}
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
            <Link to="/" className="menu">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/profile" className="menu">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/profile/settings" className="menu">
              Settings
            </Link>
          </MenuItem>
          <MenuItem onClick={this.logOut}>
            <Link to="/login" className="menu">
              Logout
            </Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
