import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Welcome from "./components/Body/Welcome";


function Header() {
    return (
        <div> 
            <Router>
                <div>
                    <nav>
                        <Link to="/"> text </Link>
                    </nav>
                </div>
            </Router>

                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
    )
}
export default Header;




// import React, {useState} from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import Grief from './angryGrief';
import Typing from 'react-typing-animation';
export default Angry;

function Angry() {
    const [str, setStr] = useState(0);
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
                        id="madGrief"
                        onClick = {
                            function returnStr () {
                                   setStr (str);
                               }   
                        }>
                        I am grieving
                    </Link>  
                        <p> 
                            {str}
                        </p>
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
 
// 4/6/2021
// onClick = {
//     function returnCount () {
//         setCount (count+1);
//     }
// }>
// I am grieving {count}