import React from "react";
import PropTypes from "prop-types";
import "./styles";

const RecentListItems = ({ recentitem }) => {
  return (
    <li className="recent-list-item">
      <p className="recent-item-body">{recentitem}</p>
    </li>
  );
};

RecentListItems.propTypes = {};

export default RecentListItems;
