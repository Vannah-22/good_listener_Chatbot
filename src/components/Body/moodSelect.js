import React from 'react';
import 'MoodSelect.css';

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
                        id='happy'>
                        </button>

                        <button className='mood-button'
                        id='sad'>
                        </button>

                        <button className='mood-button'
                        id='angry'>
                        </button>
                </div>
            </div>
        )
    }
}
export default MoodSelect;