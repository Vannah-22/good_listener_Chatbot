import React from 'react';
import './Header.css';
import {
    Link
} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (     
            <header>
                <Link to = "/"
                className="header">
                    E.M.A. 
                </Link>
            </header>
        )
    }
}
export default Header;