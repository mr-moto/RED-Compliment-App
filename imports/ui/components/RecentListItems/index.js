import React from "react";
import PropTypes from "prop-types";

const RecentListItems = ({ recentitem }) => {
  return (
    <li className="recent-list-item">
      <p>{recentitem}</p>
    </li>
  );
};

RecentListItems.propTypes = {};

export default RecentListItems;
