import React from 'react';
import './MoodSelect.css';
import Typing from 'react-typing-animation';
import EMA from './../../img/EMAhappy.png';

function SadGrief (){
        return (     
            <div className="std=msg">
                <img className="EMAs_Image" src= {EMA} alt="empathy-protocol" />
                <Typing> 
                    <p className="std-msg">
                        Ugh! Being bored is SOO lame! 
                        <br /> 
                        (ಠ ∩ ಠ)
                        <br /> 
                        Let me know if you want me to 
                        keep you company!
                    </p>
                </Typing>
            </div>
        )
    }
export default SadGrief;