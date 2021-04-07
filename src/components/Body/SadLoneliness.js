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
                        I get lonely from time to time, too.
                        <br />
                        Let me know if you want me to 
                        keep you company
                        <br />
                        ʕっ• ᴥ • ʔっ
                    </p>
                </Typing>
            </div>
        )
    }
export default SadGrief;