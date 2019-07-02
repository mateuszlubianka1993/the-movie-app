import React from 'react';

class TopMovies extends React.Component {

    render() {
        return(
            <div className="ui container">
                <h2 className="ui center aligned icon header">
                    <i className="circular video icon"></i>
                        Top Rated Movies
                </h2>
                <div className="movies-list">

                </div>
            </div>
        );
    };
}

export default TopMovies;
