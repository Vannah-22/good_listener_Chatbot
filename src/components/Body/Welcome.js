import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (     
            <div className = "welcome">
                <h5 className="welcome__greeting">
                    Hi! My name is Ema. I'm an Emotion Management Assistant 
                    and I am here to provide you with support!
                </h5>

                <h5 className="welcome__greeting"> What's your name? </h5>
                <p> 
                    <input type="text" id="usersName" name="the_name"
                    placeholder="What can I call you?" required autofocus />
                    <input type="submit" id="usersNameSubmit" value="Continue"></input>
                </p>


                
                {/* <button>
                    Happy
                </button>

                <button>
                    Happy
                </button>

                <button>
                    Happy
                </button> */}

            </div>
        )
    }
}
export default Welcome;