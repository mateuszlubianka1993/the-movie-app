import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="ui inverted vertical segment">
            <div className="ui inverted secondary pointing menu">
                <Link to="/" className="active item">
                    Home
                </Link>
                <Link to="/top-movies" className="item">
                    Top Movies
                </Link>
                <Link to="/top-shows" className="item">
                    Top TV Shows
                </Link>
                <Link to="/now-playing" className="item">
                    Now Playing
                </Link>
                <Link to="/search" className="item">
                    Search
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
