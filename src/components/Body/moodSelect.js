import React from 'react';
import './MoodSelect.css';
import './happy/Happy';
import Happy from './happy/Happy';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";


class MoodSelect extends React.Component {
    render() {
        return (
            <div className="mood-select">
                <Router>
                    <div>
                        <Link to="howareyoufeelingtoday/happy"
                            type="button"
                            className="mood-button"
                            id="happy"> Happy
                        </Link>
                            
                    </div>
                </Router>

                <Switch>
                    <Route path="howareyoufeelingtoday/happy"> 
                        <Happy />
                    </Route>
                </Switch>

            </div>
            
        )
    }
}
export default MoodSelect;