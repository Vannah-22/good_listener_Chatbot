import './App.css';
// import './fonts/CedarvilleCursive-Regular.ttf';
// import './fonts/DotGothic16-Regular.ttf';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
import Welcome from './components/Body/Welcome';
import MoodSelect from './components/Body/MoodSelect';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
                <div>
                    <Router>
                        <div>
                            <nav>
                                <header className="header"> 
                                <Link to="/"> Hi, my name is E.M.A! </Link>
                                </header>
                            </nav>


                            <Switch>
                                <Route path="/welcomeuser">
                                <WelcomeUser />
                                </Route>

                                <Route exact path="/">
                                    <Welcome />
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