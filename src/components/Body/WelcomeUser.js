import React from 'react';
import './WelcomeUser.css';
import './MoodSelect';

import {
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

                    <div> 
                        <Link to="/howareyoufeelingtoday"
                            type="submit"
                            className="continue">
                            Let's get started!
                        </Link>
                    </div>

                {/* <Switch>
                    <Route path="/howareyoufeelingtoday">
						<MoodSelect />
					</Route>
                </Switch> */}

            </div>
        )
    }
}
export default WelcomeUser;