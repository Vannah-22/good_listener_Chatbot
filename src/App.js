import logo from './logo.svg';
import './App.css';
// import './fonts/CedarvilleCursive-Regular.ttf';
// import './fonts/DotGothic16-Regular.ttf';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
// import About from 'about.js';
import Header from './components/Head/Header';
import Welcome from './components/Body/Welcome';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome />
                <div>
                    <Router>
                        <div>
                            <nav>
                                    <Link to="/welcomeuser"
                                    type="submit" 
                                    id="usersNameSubmit" 
                                    value="Continue" > 
                                    Continue
                                    </Link>

                            </nav>


                            <Switch>
                                <Route path="/welcomeuser">
                                <WelcomeUser />
                                </Route>
                            </Switch>


                        </div>
                    </Router>
                </div>
            <Footer />
            
        </div>
    )
}

export default App;