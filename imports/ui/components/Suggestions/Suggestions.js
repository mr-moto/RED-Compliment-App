import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Card } from "material-ui/Card";
import TextLoop from "react-text-loop";
import { Suggestions } from "../../../api/suggestions/suggestions";
import PropTypes from "prop-types";

import "./styles.css";

class SuggestionsContainer extends Component {
    state = {};
    render() {
        const { suggestions } = this.props;

        return (
            <div className="suggestions">
                <Card>
                    <div className="suggestions-box">
                        <div className="suggestions-header">
                            <div>
                                <p> Lost for words? Here are some ideas! </p>
                            </div>
                            {suggestions ? (
                                <h2 className="suggestions-cycle">
                                    <TextLoop style={{ fontSize: "14px" }} >
                                    <span>helloooo</span>
                                        {suggestions.map(suggestion => {
                                            return (
                                                <span key={suggestion._id}>
                                                    {suggestion.suggestion}
                                                </span>
                                            );
                                        })} 
                                    </TextLoop>
                                </h2>
                            ) : null}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("suggestions");
    return {
        suggestions: Suggestions.find({}, { _id: 0, suggestion: 1 }).fetch()
    };
})(SuggestionsContainer);

SuggestionsContainer.propTypes = {
  suggestionsList: PropTypes.object
};
