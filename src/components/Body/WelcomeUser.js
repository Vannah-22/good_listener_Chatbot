import React from 'react';
import './WelcomeUser.css';
import './MoodSelect';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";


function toMoodSelect () {
    const refreshPage = ()=> {
         window.location.reload();
    }
        return (     
            <div>
                <h5 className="std-msg">
                    Nice to meet you, (user).
                </h5>

                <Router> 
                    <div> 
                        <Link to="/howareyoufeelingtoday"
                            type="submit"
                            className="continue"
                            onClick= {"toMoodSelect"}>
                            Let's get started!
                        </Link>
                    </div>
                </Router>

                {/* <Switch>
                    <Route path="/howareyoufeelingtoday">
						<MoodSelect />
					</Route>
                </Switch> */}

            </div>
        )
    }
export default toMoodSelect;