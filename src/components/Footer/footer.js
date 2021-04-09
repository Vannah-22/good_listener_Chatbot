import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (     
            <footer className="footer">
                <div className="footer__copyright">
                        <p>
                            Copyright 
                            <br /> 
                            <a 
                                id="nessa-info"
                                href = "https://github.com/Vannah-22" target="_blank"> 
                                Vanessa Jackson 2021 
                            </a>
                            <br />
                            <a 
                                id="lolo-info"
                                href = "https://www.instagram.com/lol0_jx5/" target="_blank"> 
                                Art by Lauren Jackson 2021 
                            </a>
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