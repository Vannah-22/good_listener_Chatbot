import React from 'react';
import './Welcome.css';
import WelcomeUser from './WelcomeUser';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";




class Welcome extends React.Component {
    processInput() {
        // get the input from the user
        let userInput = document.getElementById("usersName");
        
        //store that input as the value of our state Varaible
        this.props.setUsername(userInput);
    }



    render() {
        return (     
            <div className = "welcome">
                <h5 className="std-msg">
                    I'm an Emotion Management Assistant 
                    and I am here to provide you with support!
                </h5>

                <p> 
                    <input type="text" id="usersName" name="the_name"
                    placeholder="What can I call you?" required autofocus />
                </p>

                <Router> 
                    <div> 
                        <Link to="/welcomeuser"
                            type="submit" 
                            className="continue"
                            onClick={
                                () => {
                                        this.processInput=();
                                }       
                            }> 
                            
                            Continue
                        </Link>
                    </div>

                    <Switch>
                        <Route path="/welcomeuser">
                            <WelcomeUser />
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}
export default Welcome;