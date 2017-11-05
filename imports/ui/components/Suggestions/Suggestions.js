import React from 'react';

import './styles.css';

var splittedText = [
                    "Your shirt is awesome", 
                    "Your project looked so professional", 
                    "Your lunch always looks delicious", 
                    "Compliment1", 
                    "Compliment2", 
                    "Compliment3"
                    ];

function cycleThroughArray(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        (function (i) {
            setTimeout(function () {
                document.getElementById('generated-suggestion').innerHTML = "";
                document.getElementById('generated-suggestion').innerHTML += splittedText[i];
            }, 5000 * i);
        })(i);
    };
}

const Suggestions = () => {
    return(
        <div className="suggestions">
            <div className="suggestions-box">
                <div className="suggestions-header">
                    Lost for words? Just write what comes to mind! 
                </div>
                <div id="generated-suggestion" className="suggestions-cycle">
                    {cycleThroughArray(splittedText)}
                </div>
            </div>
        </div>
    );
}

export default Suggestions;