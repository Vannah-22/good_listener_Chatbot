import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import sadEMA from './../../img/EMAsympathy.png';


function AngryGrief (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {sadEMA} alt="empathy-protocol" />
                <Typing> 
                    <p className="std-msg">
                        What you're going through must be very tough for you; 
                        <br />
                        don't forget that you have family and friends to 
                        <br />
                        support you in your time of need.
                    </p>
                </Typing>
            </div>
        )
    }
export default AngryGrief;