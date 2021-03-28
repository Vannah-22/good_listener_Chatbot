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
            <div>
                <div className="std-msg">
                    How are you feeling today?
                </div>

                <Router>
                    <div className="mood-select">
                        <Link to="/howareyoufeelingtoday/angry"
                            type="button"
                            id="angry"> 
                            Angry
                        </Link>
                        
                        <Link to="/howareyoufeelingtoday/happy"
                            type="button"
                            id="happy"> 
                            Happy
                        </Link>

                        <Link to="/howareyoufeelingtoday/sad"
                            type="button"
                            id="sad"> 
                            Sad
                        </Link>
                    </div>
                    
                </Router>
            </div>
        )
    }
}
export default MoodSelect;