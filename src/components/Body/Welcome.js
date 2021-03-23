import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (     
            <h3 className = "welcome">
                <h5 className="welcome__info">
                    Hi! My name is Ema. I'm an Emotion Management Assistant 
                    and I am here to provide you with support!
                </h5>
            </h3>
        )
    }
}
export default Welcome;