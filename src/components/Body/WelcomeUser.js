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
                <h5 className="welcome__user">
                    Nice to meet you, (user).
                </h5>

                <Router> 
                    <div> 
                        <Link to="/howareyoufeeling"
                            type="submit"
                            className="continue">
                            Let's get started!
                        </Link>
                            

                        <Switch>
                            <Route path="/howareyoufeeling">
                                <MoodSelect />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default WelcomeUser;