import React from 'react';
import './WelcomeUser.css';
import './MoodSelect';

import {
    Route,
    Link
} from "react-router-dom";


class WelcomeUser extends React.Component {
    render() {
        return (     
            <div>
                <p className="std-msg">
                    Nice to meet you, {this.props.username}
                </p>

                    <div> 
                        <Link to="/howareyoufeelingtoday"
                            type="submit"
                            className="continue">
                            Let's get started!
                        </Link>
                    </div>

            </div>
        )
    }
}
export default WelcomeUser;