import React from 'react';
import {Card} from 'material-ui/Card';
import TextLoop from 'react-text-loop';

import './styles.css';

const Suggestions = (suggestionsList) => {

    const suggestionsWithId = suggestionsList.suggestionsList;
    const trimmedSuggestions = Object.keys(suggestionsWithId).map(key => suggestionsWithId[key]).slice(0, -1);

    return(
        <div className="suggestions">
            <Card> 
                <div className="suggestions-box">
                    <div className="suggestions-header">
                        <div> 
                            <p> Lost for words? Here are some ideas! </p>
                        </div>
                        <div className="suggestions-cycle">
                            <TextLoop style={{fontSize: '14px'}} children={trimmedSuggestions} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Suggestions;