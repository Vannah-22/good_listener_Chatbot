import React from 'react';
import './MoodSelect.css';
import {
    Link
} from 'react-router-dom';
import sadEMA from './components/EMA_green_pixel_sad.png';
import Typing from 'react-typing-animation';

class Sad extends React.Component {
    render() {
        return (     
            <div>
                <img className="EMAs_Image" src= {sadEMA} alt="EMA's Selfie" />
                <Typing>
                    <p className="std-msg">
                        I'm sorry you feel this way. Can you explain why?
                    </p>
                </Typing>
                

                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/sad/grief"
                            type="button"
                            className="std-mood-buttons"> 
                            I am grieving
                        </Link>  

                        <Link to="/howareyoufeelingtoday/sad/loneliness"
                            type="button"
                            className="std-mood-buttons"> 
                            I feel alone
                        </Link>

                        <Link to="/howareyoufeelingtoday/sad/boredom"
                            type="button"
                            className="std-mood-buttons"> 
                            I am bored
                        </Link>
                        </div>
            </div>
        )
    }
}
export default Sad;