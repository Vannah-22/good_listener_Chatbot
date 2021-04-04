import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (     
            <footer className = "footer">
                <p className="footer__info">
                    Copyright 
                    <br /> 
                    Vanessa Jackson 2021
                    <br />
                    Art by Lauren Jackson 2021
                </p>

                <ul className="resources">
                    <li> 
                        <a href= "https://suicidepreventionlifeline.org" target="_blank"> 
                            National Suicide Prevention Lifeline Website 
                        </a>
                    </li>
                    <li> 
                        <p> 800-273-8255  </p>
                    </li>
                    
                </ul>
                
                
            </footer>
        )
    }
}
export default Footer;