import React from 'react';
import './MoodSelect.css';
import './Happy';

import {
    BrowserRouter as Router, 
    Link
} from "react-router-dom";


class MoodSelect extends React.Component {
    render() {
        return (
            <div className="mood-select">
                <div className="std-msg">
                    How are you feeling today?
                </div>
                <Router>
                    <div>
                        <Link to="/howareyoufeelingtoday/happy"
                            type="button"
                            className="mood-button"
                            id="happy">
                            Happy
                        </Link>

                        <Link to="/howareyoufeelingtoday/sad"
                            type="button"
                            className="mood-button"
                            id="sad"> 
                            Sad
                        </Link>

                        {/* <Link to="/howareyoufeelingtoday/angry"
                            type="button"
                            className="mood-button"
                            id="angry"> 
                            Angry
                        </Link> */}
                            
                    </div>
                </Router>
            </div>
        )
    }
}
export default MoodSelect;