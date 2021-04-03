import React from 'react';
import './MoodSelect.css';
import {
    Link
} from "react-router-dom";
import './Happy_Returns';

class Happy extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm glad you're happy! Can you explain why?
                </h5>
                
                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/happy/gratitude"
                            type="button"
                            className="std-mood-buttons"
                            id="gratitude"> 
                            I am grateful!
                        </Link>  

                        <Link to="/howareyoufeelingtoday/happy/prideful"
                            type="button"
                            className="std-mood-buttons"> 
                            I am proud!
                        </Link>

                        <Link to="/howareyoufeelingtoday/happy/excitement"
                            type="button"
                            className="std-mood-buttons"> 
                            I feel excited!
                        </Link>


                    </div>
            </div>
        )
    }
}
export default Happy;