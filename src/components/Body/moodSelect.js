import React from 'react';
import './MoodSelect.css';

import {
    Link
} from "react-router-dom";

import Typing from 'react-typing-animation';

class MoodSelect extends React.Component {
    render () {
        return (
                    <div>
                        <Typing> 
                            <p className="std-msg">
                                How are you feeling today?
                            </p>
                        </Typing>
                        

                            <div className="mood-select">
                                <Link to="/howareyoufeelingtoday/angry"
                                    type="button"
                                    id="angry"> 
                                    Angry
                                </Link>
                                
                                <Link to="/howareyoufeelingtoday/happy"
                                    type="button"
                                    id="happy"> 
                                    Happy
                                </Link>

                                <Link to="/howareyoufeelingtoday/sad"
                                    type="button"
                                    id="sad"> 
                                    Sad
                                </Link>
                            </div>
                            
                    </div>
                )
    }
}
        
export default MoodSelect;