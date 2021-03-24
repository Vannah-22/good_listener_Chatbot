import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (     
            <div className = "welcome">
                <h5 className="welcome__greeting">
                    Hi! My name is EMA. I'm an Emotion Management Assistant 
                    and I am here to provide you with support!
                </h5>

                <h5 className="welcome__greeting"> What's your name? </h5>
                <p> 
                    <input type="text" id="usersName" name="the_name"
                    placeholder="What can I call you?" required autofocus />
                </p>
            </div>
        )
    }
}
export default Welcome;