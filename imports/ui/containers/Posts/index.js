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
      height: "20vh",
      width: "100%",
      textAlign: "center",
      display: "inline-block"
    };
    const style = {
      height: "10vh",
      width: "100%",
      textAlign: "center",
      display: "inline-block",
      margin: "0.5rem 0"
    };
    const style2 = {
      display: "flex",
      height: "100vh",
      flexFlow: "column nowrap"
    };

    return (
      <div className="container" style={style2}>
        <div className="profile-container">
          <Paper style={style1} zDepth={1}>
            <ul>
              <li>
                <p>
                  Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle.
                </p>
              </li>
              <li>
                <p>
                  Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle.
                </p>
              </li>
              <li>
                <p>
                  Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle.
                </p>
              </li>
            </ul>
          </Paper>
        </div>
        <div className="filter-container">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Styled Floating Label Text"
            floatingLabelStyle={{ color: "skyblue" }}
          >
            {items}
          </SelectField>
        </div>
        <div className="posts-container" />
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p>To, Mary Jane</p>
          <em>Some beautiful beautiful text</em>
          <p>From, Secret</p>
        </Paper>
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
