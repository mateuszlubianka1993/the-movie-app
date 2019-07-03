import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="ui inverted vertical segment">
            <div className="ui inverted secondary stackable container pointing menu">
                <Link to="/" className="active item">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="tmdb-logo"/>
                </Link>
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
