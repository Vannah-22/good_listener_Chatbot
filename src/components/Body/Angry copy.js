import React, {useState} from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";

import Typing from 'react-typing-animation';
export default Grief;


function Grief() {
    const [count, setCount] = useState(0);
}



    return (     
        <div>
            <Typing> 
                <p className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </p>
            </Typing>
            

                <div className= "mood-select">
                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons"
                        onClick = {
                            function returnGrief(griefReturns) {
                                setStatement (
                                    for (let i=0; i<griefReturns.length; 1++) {
                                    document.write(griefReturns);
                                    }
                                )
                            }
                        }> 
                    </Link>
                    <Link to="/howareyoufeelingtoday/angry/frustration"
                        type="button"
                        className="std-mood-buttons"> 
                        I feel frustrated
                    </Link>

                    <Link to="/howareyoufeelingtoday/angry/fearful"
                        type="button"
                        className="std-mood-buttons"> 
                        I am scared
                    </Link>
                </div>
        </    ) 
}     

// function returnCount () {
//     setCount (count+1);
// }
// }>
// I am grieving {count}