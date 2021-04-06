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
                    EMA
                </Link>
            </header>
        )
    }
}
export default Header;