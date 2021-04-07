import React from 'react';
import './Welcome.css';
import WelcomeUser from './WelcomeUser';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

import Typing from 'react-typing-animation';
import EMA from './../../img/EMAhappy.png';




class Welcome extends React.Component {
    processInput() {
        // get the input from the user
        // we want the VALUE of the element, not the whole HTML element
        let userInput = document.getElementById("usersName").value;
        if (userInput) { 
            //store that input as the value of our state Varaible
            this.props.setUsername(userInput);
        }
    }

    AnimatedTypingComponent = () => (
        <Typing>
            <span>This span will get typed.</span>
        </Typing>
    );



    render() {
        return (     
            <div className = "welcome">
                <img className="EMAs_Image" src= {EMA} alt="content-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Hi, my name E.M.A. I'm an Emotion Management Assistant 
                        and I am here to provide you with support!
                    </p>
                </Typing>
                

                <p> 
                    <input type="text" id="usersName" name="the_name"
                    placeholder="What can I call you?" required autofocus />
                </p>

                
                    <div> 
                        <Link to="/welcomeuser"
                            type="submit" 
                            className="continue"
                            onClick={
                                () => this.processInput() 
                            }>
                            Continue
                        </Link>
                    </div>

                    <Switch>
                        <Route path="/welcomeuser">
                            <WelcomeUser />
                        </Route>
                    </Switch>

            </div>
        )
    }
}
export default Welcome;