import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <Link to="/" className="active item">
                    Home
                </Link>
                <a className="item">
                    Top Movies
                </a>
                <a className="item">
                    Top TV Shows
                </a>
                <a className="item">
                    Now Playing
                </a>
                <a className="item">
                    Search
                </a>
            </div>
        </div>
    );
};

export default NavBar;
