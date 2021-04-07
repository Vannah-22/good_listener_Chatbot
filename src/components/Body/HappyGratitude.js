import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import EMA from './../../img/EMAhappy.png';

function HappyGratitude (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {EMA} alt="content-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Gratitude is a great habit to have!
                        I'm glad you're feeling this way! (^.^)b
                    </p>
                </Typing>
            </div>
        )
    }
export default HappyGratitude;