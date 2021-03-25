import React from 'react';
import './Happy.css';
import WelcomeUser from './WelcomeUser';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
import WelcomeUser from '../WelcomeUser';


class Happy extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm glad you're happy! Can you explain why?
                </h5>

                <Router> 
                    <div> 
                            <Link to="/howareyoufeeling/happy"
                                type="submit"
                                className="continue">
                                Let's get started!
                            </Link>
                            

                        <Switch>
                            <Route path="/howareyoufeeling/happy">
                                <WelcomeUser />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Happy;