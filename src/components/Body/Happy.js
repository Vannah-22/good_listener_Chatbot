import React from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import Typing from 'react-typing-animation';
// import EMA from './src/components/EMAhappy.png';

class Happy extends React.Component {
    render() {
        return (     
            <div>
                {/* <img className="EMAs_Image" src= {EMA} alt="EMA's Selfie" /> */}
                <Typing> 
                    <p className="std-msg">
                        I'm glad you're happy! Can you explain why?
                    </p>
                </Typing>
                
                
                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/happy/gratitude"
                            type="button"
                            className="std-mood-buttons"
                            id="gratitude"> 
                            I am grateful!
                        </Link>  

                        <Link to="/howareyoufeelingtoday/happy/prideful"
                            type="button"
                            className="std-mood-buttons"> 
                            I am proud!
                        </Link>

                        <Link to="/howareyoufeelingtoday/happy/excitement"
                            type="button"
                            className="std-mood-buttons"> 
                            I feel excited!
                        </Link>


                    </div>
            </div>
        )
    }
}
export default Happy;