import React from 'react';
import './MoodSelect.css';
import {
    BrowserRouter as Router, 
    Link
} from "react-router-dom";

class Sad extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </h5>

                <Router>
                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/sad/grief"
                            type="button"
                            className="std-mood-buttons"> 
                            I am grieving
                        </Link>  

                        <Link to="/howareyoufeelingtoday/sad/loneliness"
                            type="button"
                            className="std-mood-buttons"> 
                            I feel alone
                        </Link>

                        <Link to="/howareyoufeelingtoday/sad/boredom"
                            type="button"
                            className="std-mood-buttons"> 
                            I am bored
                        </Link>
                        </div>
                </Router>
            </div>
        )
    }
}
export default Sad;