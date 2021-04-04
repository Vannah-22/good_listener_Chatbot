import './App.css';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './components/Head/Header';
import Welcome from './components/Body/Welcome';
import WelcomeUser from './components/Body/WelcomeUser';
import Footer from './components/Footer/Footer';
import MoodSelect from './components/Body/MoodSelect';
import Angry from './components/Body/Angry';
import Happy from './components/Body/Happy';
import Sad from './components/Body/Sad';
import EMA from './EMApxArt.png';
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
        	<div>
            <Router>
               <div>
                  <header> 
                    <Header />
										<img className="EMAs_Image" src= {EMA} alt="EMA's Selfie" />
                  </header>
     							

                  <Switch>
									<Route path="howareyoufeelingtoday/sad/grief">
										<Sad
											option1="I am grieving" />
									</Route>

									<Route path="howareyoufeelingtoday/sad/lonliness">
										<Sad />
									</Route>
									
									<Route path="howareyoufeelingtoday/sad/boredom">
										<Sad />
									</Route>

								<Route path="/howareyoufeelingtoday/sad"> 
									<Sad />
								</Route>
									

									<Route path="howareyoufeelingtoday/happy/gratitude">
										<Happy />
									</Route>

									<Route path="howareyoufeelingtoday/happy/prideful">
										<Happy />
									</Route>

									<Route path="howareyoufeelingtoday/happy/excitement">
										<Happy />
									</Route>

								<Route path="/howareyoufeelingtoday/happy"> 
									<Happy />
								</Route>

								
									<Route path="howareyoufeelingtoday/angry/grief">
										<Angry />
									</Route>

									<Route path="howareyoufeelingtoday/angry/frustration">
										<Angry />
									</Route>
									
									<Route path="howareyoufeelingtoday/angry/fearful">
										<Angry />
									</Route>

								<Route path="/howareyoufeelingtoday/angry"> 
									<Angry />
								</Route>

								<Route path="/howareyoufeelingtoday">
									<MoodSelect />
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
              	</div>			
            </Router>
        </div>
      	<Footer />
            
    </div>
    )
}

export default App;