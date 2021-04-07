import React from 'react';
import './MoodSelect';

import {
    Route,
    Link
} from "react-router-dom";
import EMA from './../../img/EMAhappy.png';
import Typing from 'react-typing-animation';


class WelcomeUser extends React.Component {
    render() {
        return (     
            <div>
                <img className="EMAs_Image" src= {EMA} alt="EMA's Selfie" />
                <Typing> 
                    <p className="std-msg">
                        It's nice to meet you, {this.props.username}
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