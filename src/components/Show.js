import React from 'react';

class Show extends React.Component {
    render() {
        const {show} = this.props;
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt="poster" />
                </div>
                <div className="content">
                    <h5 className="header">{show.title}</h5>
                    <div className="meta">
                        <span className="date">{show.release_date}</span>
                    </div>
                    <div className="description">
                        {show.overview}
                    </div>
                </div>
                <div className="extra content">
                    <div>
                        <i className="thumbs up icon"></i>
                            {show.vote_average}/10
                    </div>
                    <div>
                            Votes: {show.vote_count}
                    </div>
                </div>
            </div>
        );
    };
}

export default Show;
