import React from 'react';

import './styles.css';

var splittedText = ["Hello", "World", "How", "Are", "You", "Today"];

function loopThroughSplittedText(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
                document.getElementById('generated-suggestion').innerHTML = "";
                document.getElementById('generated-suggestion').innerHTML += splittedText[i];
                //console.log(splittedText[i]);
            }, 3000 * i);
        })(i);
    };
}
loopThroughSplittedText(splittedText);



const Suggestions = () => {
    return(
        <div className="suggestions">
            <div className="suggestions-box">
                <div>
                    Lost for words? 
                </div>
                <div id="generated-suggestion">
                    {loopThroughSplittedText(splittedText)}
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Suggestions;