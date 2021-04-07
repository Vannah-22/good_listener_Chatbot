import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import EMA from './../../img/EMAhappy.png';

function HappyExcitement (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {EMA} alt="content-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Anticipation is like a rollercoaster:
                        Enjoy the ride! (^.^)b
                    </p>
                </Typing>
            </div>
        )
    }
export default HappyExcitement;