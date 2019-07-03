import React from 'react';

class Show extends React.Component {
    render() {
        const {person} = this.props;
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`} alt="avatar" />
                </div>
                <div className="content">
                    <h5 className="header">{person.name}</h5>
                    <div className="meta">
                        {/* <span className="date">{person.release_date}</span> */}
                    </div>
                    <div className="description">
                        {/* {person.overview} */}
                    </div>
                </div>
                <div className="extra content">
                    <div>
                        <i className="thumbs up icon"></i>
                            {/* {person.vote_average}/10 */}
                    </div>
                    <div>
                            {/* Votes: {person.vote_count} */}
                    </div>
                </div>
            </div>
        );
    };
}

export default Show;
