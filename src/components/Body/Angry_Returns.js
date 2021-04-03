import React from 'react';
import './MoodSelect.css';
import { 
    Link
} from "react-router-dom";

class Angry extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm sorry you feel this way. Can you explain why?
                </h5>

                    <div>
                        <button className="std-mood-buttons"
                                onClick="mad-returns()" 
                                type="button"
                                id="mad-grief">
                        </button>
                    </div>
            </div>
        )
    }
}
export default Angry;