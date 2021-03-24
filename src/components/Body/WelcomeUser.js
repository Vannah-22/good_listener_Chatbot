import React from 'react';
import './WelcomeUser.css';

class WelcomeUser extends React.Component {
    render() {
        return (     
            <div className = "welcome">
                <h5 className="welcome__user">
                    Nice to meet you, (user). Ready to get started?
                </h5>

            </div>
        )
    }
}
export default WelcomeUser;