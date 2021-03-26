import './App.css';
// import './fonts/EarlsRevenge-69Kg.ttf';


import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
import Welcome from './components/Body/Welcome';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';
import MoodSelect from './components/Body/moodSelect';
import Happy from './components/Body/Happy';

function App() {
    return (
        <div className="App">
                <div>
                    <Router>
                        <div>
                            <header className="header"> 
                                <h1 id="EMA__header"> <Link to="/"> Hi, my name is E.M.A! </Link> </h1>
                            </header>

                            <Switch>
                                <Route path="/howareyoufeelingtoday/happy"> 
                                    <Happy />
                                </Route>

                                <Route path="/howareyoufeelingtoday">
                                    <MoodSelect />
                                </Route>


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