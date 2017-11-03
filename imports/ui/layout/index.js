import React from 'react';
import PropTypes from 'prop-types';

// import { Header } from ''
import './styles.css';

let location = window.location.href;
const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {/* { location !== 'http://localhost:3000/login' ?  <Header /> : null } */}
        </div>
        <div className="appContent">
            {children} {/* defined as routes. in app/index.js */}
        </div>
        <footer className="appFooter">
            {/* Footer here */}
        </footer>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
