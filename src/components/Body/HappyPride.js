import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import EMA from './../../img/EMAhappy.png';


function HappyPride (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {EMA} alt="content-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Confidence is so important to have; 
                        You should feel very proud of your 
                        accomplishments! Keep up the good
                        work! (^.^)b
                    </p>
                </Typing>
            </div>
        )
    }
export default HappyPride;