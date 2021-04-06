import React, {useState} from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import AngryGrief from './angryGrief';
import Typing from 'react-typing-animation';
export default Angry;

function Angry() {
    const [count, setCount] = useState(0);
    return (     
        <div>
            <Typing> 
                <p className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </p>
            </Typing>
            

                <div className= "mood-select">
                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons"
                        onClick = {
                            {AngryGrief}
                        }
                        >
                    </Link> 

                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons"
                        id="madGrief"
                        onClick = {
                            function returnCount () {
                                    setCount (count+1);
                                }
                        }>
                        {count}
                    </Link>

                    <Link to="/howareyoufeelingtoday/angry/grief"
                        type="button"
                        className="std-mood-buttons"
                        id="madGrief"
                        onClick = {
                            function returnCount () {
                                    setCount (count+1);
                                }
                        }>
                        {count}
                    </Link>

                    
                    </div>
                    
        </div>
    ) 
}     