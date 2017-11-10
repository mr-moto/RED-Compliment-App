import React from "react";
import "./styles";

const RecentListItems = ({ recentitem }) => {
  return (
    <li className="recent-list-item">
      <p className="recent-item-body">{recentitem}</p>
    </li>
  );
};

export default RecentListItems;
