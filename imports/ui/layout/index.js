import React, { Component } from "react";
import PropTypes from "prop-types";

import { Header } from "../containers/Header";
import "./styles.css";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let location = window.location.href;
    const { children } = this.props;

    return (
      <div className="appContentWrapper">
        <div className="appHeader">
          {location !== "http://localhost:3000/login" ? <Header /> : null}
        </div>
        <div className="appContent">
          {children} {/* defined as routes. in app/index.js */}
        </div>
        <footer className="appFooter">{/* Footer here */}</footer>
      </div>
    );
  }
}

export default Layout;
