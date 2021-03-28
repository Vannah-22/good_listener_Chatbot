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
                    <div>
                    <button className="std-mood-buttons"
                            onClick="mad-returns()" 
                            type="button"
                            id="mad-grief">
                        </button>
                            function sad-returns() {
                                document.getElementById("gratitude").innerHTML = 
                                "I am sorry you are grieving. What you are going through must be very hard, but you do not have to face to alone";

                        </div>
                </Router>
            </div>
        )
    }
}
export default Angry;