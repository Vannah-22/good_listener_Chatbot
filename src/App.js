import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header"> 
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/"> Home </Link>
                                    </li>

                                    <li>
                                        <Link to="/about"> About </Link>
                                    </li> 
                                </ul>
                            </nav>
                        </div>
                    </Router>
                </div>
            </header>
        </div>
    )
}

export default App;