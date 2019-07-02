import React from 'react';
import {connect} from 'react-redux';
import {getTopMovies} from '../actions';
import Movie from './Movie';

class TopMovies extends React.Component {

    componentDidMount() {
        this.props.getTopMovies();
    }

    render() {
        const { topMovies } = this.props;
        const renderMovies = topMovies.map((movie) => <Movie movie={movie} key={movie.id} />)
        return(
            <div className="ui container">
                <h2 className="ui center aligned icon header">
                    <i className="circular video icon"></i>
                        Top Rated Movies
                </h2>
                <div className="movies-list">
                    {renderMovies}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      topMovies: state.topMovies,
    };
  };

export default connect(mapStateToProps, {getTopMovies}) (TopMovies);
