import React from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import Typing from 'react-typing-animation';
import sadEMA from './../../img/EMAsympathy.png';

// function Angry() {
//     const [count, setCount] = useState(0);

class Angry extends React.Component {
    render() {
    return (     
        <div>
            <img className="EMAs_Image" src= {sadEMA} alt="sympathy_protocol" />
            <Typing> 
                <p className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </p>
            </Typing>
            

                <div className= "mood-select">
                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons">
                        I am grieving
                    </Link>  

                    <Link to="/howareyoufeelingtoday/angry/frustration"
                        type="button"
                        className="std-mood-buttons"> 
                        I feel frustrated
                    </Link>

                    <Link to="/howareyoufeelingtoday/angry/fearful"
                        type="button"
                        className="std-mood-buttons"> 
                        I am scared
                    </Link>
                </div>
        </div>
    )
    }
}
export default Angry;