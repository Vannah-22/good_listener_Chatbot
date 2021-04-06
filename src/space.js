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