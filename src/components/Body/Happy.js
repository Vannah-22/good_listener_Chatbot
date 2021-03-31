import React from 'react';
import './MoodSelect.css';
import {
    BrowserRouter as Router, 
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
                
                <Router>
                    <div className= "mood-select">
                        <Link to="/howareyoufeelingtoday/happy/gratitude"
                            type="button"
                            className="std-buttons"
                            id="gratitude"> 
                            I am grateful!
                        </Link>  

                        <Link to="/howareyoufeelingtoday/happy/prideful"
                            type="button"
                            className="std-buttons"> 
                            I am proud!
                        </Link>

                        <Link to="/howareyoufeelingtoday/happy/excitement"
                            type="button"
                            className="std-buttons"> 
                            I feel excited!
                        </Link>


                    </div>
                </Router>
            </div>
        )
    }
}
export default Happy;