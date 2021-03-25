import React from 'react';
import './MoodSelect.css';

// import {
//     BrowserRouter as Router, 
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

class MoodSelect extends React.Component {
    render() {
        return (
            <div className="mood-select">
                <div>
                        <button className='mood-button'
                        id='happy'> Happy
                        </button>

                        <button className='mood-button'
                        id='sad'> Sad
                        </button>

                        <button className='mood-button'
                        id='angry'> Mad
                        </button>
                </div>
            </div>
        )
    }
}
export default MoodSelect;