import './App.css';
// import './fonts/CedarvilleCursive-Regular.ttf';
// import './fonts/DotGothic16-Regular.ttf';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Head/Header';
import Welcome from './components/Body/Welcome';
import MoodSelect from './components/Body/MoodSelect';
// import WelcomeUser from './components/Body/WelcomeUser';
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
                                    <Link to="/howareyoufeelingtoday"
                                    type="submit" 
                                    id="usersNameSubmit" 
                                    value="Continue" > 
                                    Continue
                                    </Link>

                            </nav>


                            <Switch>
                                <Route path="/howareyoufeelingtoday">
                                <MoodSelect />
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