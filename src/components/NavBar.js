import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="ui inverted vertical segment">
            <div className="ui inverted secondary stackable container pointing menu">
                <NavLink to="/" className="item">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="tmdb-logo"/>
                </NavLink>
                <NavLink to="/" className="item">
                    Home
                </NavLink>
                <NavLink to="/top-movies" className="item">
                    Top Movies
                </NavLink>
                <NavLink to="/top-shows" className="item">
                    Top TV Shows
                </NavLink>
                <NavLink to="/now-playing" className="item">
                    Now Playing
                </NavLink>
                <NavLink to="/search" className="item">
                    Search
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
