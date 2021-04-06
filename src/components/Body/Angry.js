import React, {useState} from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import Typing from 'react-typing-animation';
export default Angry;

function Angry() {
    const [count, setCount] = useState(0);
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
                            function returnCount () {
                                setCount (count+1);
                            }
                        }>
                        I am grieving {count}
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
        </div>
    )





}
        


//ATEMPTS //
// function madReturns () {
//     var madReturns= new Array ("I'm sorry you're grieving, but you do not have to face it alone",
//     "You are safe to grieve at your own pace", 
//     "Don't forget to reach out to family and friends in your time of need")
    
//     var random=madReturns[Math.floor(Math.random() * madReturns.length)];
//     document.getElementById("griefReturns").innerHTML=random;
//     }
//     onClick={madReturns.random}> 

// function madReturns () {
//         var madReturns= new Array ("I'm sorry you're grieving, but you do not have to face it alone",
//         "You are safe to grieve at your own pace", 
//         "Don't forget to reach out to family and friends in your time of need")
        
//         var random=madReturns[Math.floor(Math.random() * madReturns.length)];
//         document.getElementById("griefReturns").innerText=random;
    
//         return 
//         }
    
//         console.log(madReturns);
 