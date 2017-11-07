import React from 'react';
import {Card} from 'material-ui/Card';
import TextLoop from 'react-text-loop';

import './styles.css';

var ArrayText = [ //Dummy text, to be removed later
                    "Your shirt is awesome", 
                    "That project looked so professional", 
                    "Your lunch always looks delicious", 
                    "I love your dog  Betsy!", 
                    "You have such a great smile"
                    ];

const Suggestions = () => {
    return(
        <div className="suggestions">
            <Card> 
                <div className="suggestions-box">
                    <div className="suggestions-header">
                        <div> 
                            <p> Lost for words? Here are some ideas! </p>
                        </div>
                        <div className="suggestions-cycle">
                            <TextLoop style={{fontSize: '14px'}} children={ArrayText} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Suggestions;