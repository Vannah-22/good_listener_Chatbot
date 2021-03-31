import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (     
            <footer className = "footer">
                <h5 className="footer__info">
                    Copyright 
                    <br /> 
                    Vanessa Jackson 2021
                    <br />
                    Art by Lauren Jackson 2021
                </h5>
            </footer>
        )
    }
}
export default Footer;