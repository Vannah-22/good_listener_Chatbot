import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Welcome from "./components/Body/Welcome";


function Header() {
    return (
        <div> 
            <Router>
                <div>
                    <nav>
                        <Link to="/"> text </Link>
                    </nav>
                </div>
            </Router>

                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
    )
}
export default Header;