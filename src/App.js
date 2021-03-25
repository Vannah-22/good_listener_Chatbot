import './App.css';
// import './fonts/EarlsRevenge-69Kg.ttf';


import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";
import Welcome from './components/Body/Welcome';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
                <div>
                    <Router>
                        <div>
                            <nav>
                                <header className="header"> 
                                    <h1 id="EMA__header"> <Link to="/"> Hi, my name is E.M.A! </Link> </h1>
                                </header>
                            </nav>


                            <Switch>
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