import React, {useState} from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";

import Typing from 'react-typing-animation';
export default AngryGrief;

var griefReturns = ["text1", "text2", "text3"];
function AngryGrief() {
    const [count, setCount] = useState(0);

    return (     
        <div>
            <Typing> 
                <p className="std-msg">
                    here is some text from grief
                </p>
            </Typing>

            <div className= "mood-select">
                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons"
                        id="madGrief"
                        onClick = {
                            function returnCount () {
                                document.getElementById("madGrief").props
                                    setCount (count+1);
                                }
                        }>
                        {count}
                    </Link> 
            </div>
        </div>
    )
}