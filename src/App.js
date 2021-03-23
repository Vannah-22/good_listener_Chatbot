import logo from './logo.svg';
import './App.css';
// import './fonts/CedarvilleCursive-Regular.ttf';
// import './fonts/DotGothic16-Regular.ttf';

// import {
//     BrowserRouter as Router, 
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import About from 'about.js';
import Header from './components/Head/Header';
import Welcome from './components/Body/Welcome';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome />
            <Footer />
            
        </div>
    )
}

export default App;