import React from "react";
import PropTypes from "prop-types";

const RecentList = props => {
  return <ol className="recent-items-list">{props.children}</ol>;
};

RecentList.propTypes = {};

export default RecentList;
