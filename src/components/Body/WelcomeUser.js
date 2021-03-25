import React from 'react';
import './WelcomeUser.css';
import moodSelect from './moodSelect';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

class WelcomeUser extends React.Component {
    render() {
        return (     
            <div className = "welcome">
                <h5 className="welcome__user">
                    Nice to meet you, (user). Ready to get started?
                </h5>

                

                <Router> 
                    <div className="mood-selection">
                       <Link to="/howareyoufeelingtoday" /> 

                        <Switch>
                            <Route path="/howareyoufeelingtoday">
                                <moodSelect />
                            </Route>
                        </Switch>

                    </div>
                </Router>
            </div>
        )
    }
}
export default WelcomeUser;