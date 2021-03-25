import React from 'react';
import './WelcomeUser.css';
import './MoodSelect';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

function WelcomeUser() {
        return (     
            <div className = "welcome">
                <h5 className="welcome__user">
                    Nice to meet you, (user).
                </h5>

                <Router> 
                    <div className="mood-selection">
                        <nav>
                            <Link to="/howareyoufeelingtoday">  </Link>
                        </nav>
                        

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
export default WelcomeUser;