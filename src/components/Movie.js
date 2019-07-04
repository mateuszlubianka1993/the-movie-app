import React from 'react';
import '../styles/display-items.css';

class Movie extends React.Component {
    state = {active: false};
    seeMore = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        const {movie} = this.props;
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                </div>
                <div className="content">
                    <h5 className="header">{movie.title}</h5>
                    <div className="meta">
                        <span className="date">{movie.release_date}</span>
                    </div>
                    <div className="description">
                        <div className={this.state.active ? "read-more" : "read-less"}>
                            {movie.overview}
                        </div>
                        <button className="fluid ui button" onClick={this.seeMore}>{this.state.active ? 'See less' : 'See more'}</button>
                    </div>
                </div>
                <div className="extra content">
                    <div>
                        <i className="thumbs up icon green-color"></i>
                            <span className="gold-color"> {movie.vote_average}/10</span>
                    </div>
                    <div>
                            <span className="green-color">Votes:</span><span className="gold-color"> {movie.vote_count}</span>
                    </div>
                </div>
            </div>
        );
    };
}

export default Movie;
