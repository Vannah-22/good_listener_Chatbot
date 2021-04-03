import React from 'react';
import './MoodSelect.css';
import './Happy';

import {
    Link
} from "react-router-dom";

function MoodSelect () {
        const refreshPage = ()=> {
             window.location.reload();
        }

        return (
            <div>
                <h1 className="std-msg">
                    How are you feeling today?
                </h1>

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
export default MoodSelect;

// set to refresh when clicked on