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
                    </div>
                </Router>
            </div>
        )
    }
}
export default Angry;