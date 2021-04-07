import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import sadEMA from './../../img/EMAsympathy.png';


function SadGrief (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {sadEMA} alt="empathy-protocol" />
                <Typing> 
                    <p className="std-msg">
                        I'm very sorry for your loss; 
                        remember, there is no 'right way'
                        to grieve. 
                        <br />
                        You are safe to grieve
                        at your own pace. 
                    </p>
                </Typing>
            </div>
        )
    }
export default SadGrief;