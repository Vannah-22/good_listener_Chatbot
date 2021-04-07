import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (     
            <footer className = "footer">
                <div className="footer__copyright">
                        <p>
                            Copyright 
                            <br /> 
                            Vanessa Jackson 2021
                            <br />
                            Art by Lauren Jackson 2021
                        </p>
                </div>
                
                <div> 
                    <a className="footer__resources" href= "https://suicidepreventionlifeline.org" target="_blank"> 
                        National Suicide Prevention Lifeline Website 
                        <br />
                        800-273-8255
                    </a>
                </div> 
            </footer>
        )
    }
}
export default Footer;