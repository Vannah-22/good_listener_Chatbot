import React from 'react';
import './MoodSelect.css';
import {
    BrowserRouter as Router, 
    Link
} from "react-router-dom";

class Angry extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </h5>

                <Router>
                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/angry/grief"
                            type="button"
                            className="std-mood-buttons"> 
                            I am grieving
                        </Link>  

                        <Link to="/howareyoufeelingtoday/angry/frustration"
                            type="button"
                            className="std-mood-buttons"> 
                            I feel alone
                        </Link>

                        <Link to="/howareyoufeelingtoday/angry/fearful"
                            type="button"
                            className="std-mood-buttons"> 
                            I am scared
                        </Link>
                        </div>
                </Router>
            </div>
        )
    }
}
export default Angry;