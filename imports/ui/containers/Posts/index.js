import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Quotes } from "../../../api/quotes/quotes";
import { Suggestions } from "../../../api/suggestions/suggestions";
import { Badges } from "../../../api/badges/badges";
import Paper from "material-ui/Paper";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import PostAvatar from "../../components/PostAvatar/";
import PostIconList from "../../components/PostIconList/";
import PostIcon from "../../components/PostIcon/";
import PostBody from "../../components/PostBody/";
import RecentList from "../../components/RecentList/";
import RecentListItem from "../../components/RecentListItems/";
import "./styes";

class PostsContainer extends Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Most Recent" />,
      <MenuItem key={2} value={2} primaryText="Most Popular" />,
      <MenuItem key={3} value={3} primaryText="Trending" />,
      <MenuItem key={4} value={4} primaryText="Newest" />,
      <MenuItem key={5} value={5} primaryText="Least Popular" />
    ];
    const style1 = {
      width: "100%",
      textAlign: "center",
      display: "inline-block"
    };
    const style = {
      minHeight: "10vh",
      width: "100%",
      textAlign: "left",
      display: "flex",
      flexFlow: "column nowrap",
      margin: "2px 0",
      fontSize: "0.75rem"
    };
    const style2 = {
      display: "flex",
      height: "100%",
      flexFlow: "column nowrap"
    };

    return (
      <div className="post-wrapper" style={style2}>
        <div className="recent-container">
          <Paper style={style1} zDepth={1}>
            <h2 className="recent-subtitle">
              Your Recently Received Compliments
            </h2>
            <RecentList>
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
            </RecentList>
          </Paper>
        </div>
        <div className="filter-container">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Styled Floating Label Text"
            floatingLabelStyle={{ color: "#ed4242" }}
            labelStyle={{ color: "white" }}
            selectedMenuItemStyle={{ color: "#ed4242" }}
          >
            {items}
          </SelectField>
        </div>
        <div className="posts-container">
          <Paper style={style} zDepth={1}>
            <p className="posts-to">To, Mary Jane</p>
            <PostBody content="Some beautiful beautiful text..." />
            <div className="posts-footer">
              <div className="posts-footer-left">
                <div className="posts-social-icons-container">
                  <PostIconList>
                    <PostIcon iconName="fa fa-thumbs-o-up" />
                    <PostIcon iconName="fa fa-share" />
                    <PostIcon iconName="fa fa-hand-peace-o" />
                    <PostIcon iconName="fa fa-heart-o" />
                  </PostIconList>
                </div>
              </div>
              <div className="posts-footer-right">
                <p className="posts-from">
                  From,<br /> Secret
                </p>
                <PostAvatar src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    posts: Posts.find({}).fetch(),
    quotes: Quotes.find({}).fetch(),
    badges: Badges.find({}).fetch(),
    suggestions: Suggestions.find({}).fetch()
  };
})(PostsContainer);
