import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import sadEMA from './../../img/EMAsympathy.png';


function AngryFearful (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {sadEMA} alt="sympathy-protocol" />
                <Typing> 
                    <p className="std-msg">
                        It's normal to feel scared from time to time;
                        it's nothing to be ashamed of. You are courageous!
                        (^w^)b
                    </p>
                </Typing>
            </div>
        )
    }
export default AngryFearful;