import React from 'react';
import './WelcomeUser.css';
import MoodSelect from './MoodSelect';

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
                        <Link to="/howareyoufeelingtoday"
                                        type="submit"
                                        className="continue">
                                        Let's get started!
                        </Link>
                    </div>
                </Router>

                <Switch>
                    <Route path="/howareyoufeelingtoday"> 
                        <MoodSelect />
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default WelcomeUser;