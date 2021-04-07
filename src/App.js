import './App.css';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
} from "react-router-dom";

import Header from './components/Head/Header';
import Welcome from './components/Body/Welcome';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';
import MoodSelect from './components/Body/MoodSelect';

import Angry from './components/Body/Angry';
import AngryGrief from './components/Body/AngryGrief';
import AngryFrustration from './components/Body/AngryFrustration';
import AngryFearful from './components/Body/AngryFearful';

import Happy from './components/Body/Happy';
import HappyExcitement from './components/Body/HappyExcitement';
import HappyGratitude from './components/Body/HappyGratitude';
import HappyPrideful from './components/Body/HappyPride';

import Sad from './components/Body/Sad';
import SadGrief from './components/Body/SadGrief';
import SadLoneliness from './components/Body/SadLoneliness';
import SadBoredom from './components/Body/SadBoredom';
import {useState} from 'react';

// initial value for the useState variable is "User"; the default name;
// name of the useState variable: 'username';
// name of the method that changes the username (setVarName): 'setUsername';
// DEFINE {useState};
// WelcomeUser component needs access to 'username' variable, so pass that into
	// <Route path= "/welcomeuser">  <WelcomeUser username={username} /> </Route>;
// Welcome component needs access to 'setUsername' method, so pass that into
	// <Route exact path = "/"> <Welcome setUsername={setUsername} /> </Route>;
function App() {
		const [username, setUsername] = useState("User");

    return (
      <div className="App">
            <Router>
                  <header> 
                    <Header />
                  </header>
     							
                  <Switch>
									<Route path="/howareyoufeelingtoday/sad/grief">
										<SadGrief />
									</Route>

									<Route path="/howareyoufeelingtoday/sad/loneliness">
										<SadLoneliness />
									</Route>
									
									<Route path="/howareyoufeelingtoday/sad/boredom">
										<SadBoredom />
									</Route>

								<Route path="/howareyoufeelingtoday/sad"> 
									<Sad />
								</Route>
									

									<Route path="/howareyoufeelingtoday/happy/gratitude">
										<HappyGratitude />
									</Route>

									<Route path="/howareyoufeelingtoday/happy/prideful">
										<HappyPrideful />
									</Route>

									<Route path="/howareyoufeelingtoday/happy/excitement">
										<HappyExcitement />
									</Route>

								<Route path="/howareyoufeelingtoday/happy"> 
									<Happy />
								</Route>

								
									<Route path="/howareyoufeelingtoday/angry/grief">
										<AngryGrief />
									</Route>

									<Route path="/howareyoufeelingtoday/angry/frustration">
										<AngryFrustration/>
									</Route>
									
									<Route path="/howareyoufeelingtoday/angry/fearful">
										<AngryFearful />
									</Route>

								<Route path="/howareyoufeelingtoday/angry"> 
									<Angry />
								</Route>
								

								<Route path="/howareyoufeelingtoday">
									<MoodSelect 
										username={username}
									/>
								</Route>
								
								<Route path="/welcomeuser">
									<WelcomeUser 
									username={username}
									/>
								</Route>

								<Route exact path="/">
									<Welcome
										setUsername={setUsername}
										 />
								</Route>
                  </Switch>		
            </Router>
      	<Footer />     
    </div>
    )
}

export default App;