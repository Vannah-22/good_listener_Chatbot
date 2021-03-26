import React from 'react';
import './WelcomeUser.css';
import MoodSelect from './moodSelect';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";


class WelcomeUser extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    Nice to meet you, (user).
                </h5>

                <Router> 
                    <div> 
                        
                    </div>
                </Router>
            </div>
        )
    }
}
export default WelcomeUser;