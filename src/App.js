import './App.css';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

import Welcome from './components/Body/Welcome';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';
import MoodSelect from './components/Body/MoodSelect';
import Happy from './components/Body/Happy';
import Sad from './components/Body/Sad';
// import Angry from './components/Body/Angry';

function App() {
    return (
      <div className="App">
        	<div>
            <Router>
               <div>
                  <header> 
                    <h1 className="EMA__header"> 
                    <Link to="/"> 
                      E.M.A.
                    </Link> 
                    </h1>
                  </header>
     
                  <Switch>
								{/* <Route path="/howareyoufeelingtoday/angry"> 
									<Angry />
								</Route> */}

								<Route path="/howareyoufeelingtoday/sad"> 
									<Sad />
								</Route>

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