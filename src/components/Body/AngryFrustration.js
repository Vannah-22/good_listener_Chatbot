import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import sadEMA from './../../img/EMAsympathy.png';

function AngryFrustration (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {sadEMA} alt="sympathy-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Frustration is a normal emotion to have when
                        we feel overwhelmed. Whatever you are going
                        through, you can overcome this challenge.
                    </p>
                </Typing>
            </div>
        )
    }
export default AngryFrustration;