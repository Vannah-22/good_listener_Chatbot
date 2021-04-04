import React from 'react';
import './MoodSelect';

import {
    Route,
    Link
} from "react-router-dom";

import Typing from 'react-typing-animation';


class WelcomeUser extends React.Component {
    render() {
        return (     
            <div>
                <Typing> 
                    <p className="std-msg">
                        Nice to meet you, {this.props.username}
                    </p>  
                </Typing>
                

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