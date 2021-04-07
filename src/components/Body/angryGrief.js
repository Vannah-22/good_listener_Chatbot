import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';


class AngryGrief extends React.Component {
    render() {
        return (     
            <div className="std=msg">
                <Typing> 
                    <p className="std-msg">
                        What you're going through must be very tough for you; 
                        you're safe to grieve at your own pace
                    </p>
                </Typing>
            </div>
        )
    }
}
export default AngryGrief;