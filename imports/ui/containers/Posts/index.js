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
      <div className="container" style={style2}>
        <div className="profile-container">
          <Paper style={style1} zDepth={1}>
            <ol>
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
            </ol>
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
        <div className="posts-container" />
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
        </Paper>
        <Paper style={style} zDepth={1}>
          <p className="posts-to">To, Mary Jane</p>
          <p className="posts-body">Some beautiful beautiful text</p>
          <p className="posts-from">
            From,<br /> Secret
          </p>
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
