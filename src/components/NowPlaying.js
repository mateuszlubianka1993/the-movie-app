import React from 'react';
import {connect} from 'react-redux';
import {getNowPlaying} from '../actions';
import Movie from './Movie';
import '../styles/display-items.css';

class NowPlaying extends React.Component {

    componentDidMount() {
        this.props.getNowPlaying();
    }

    render() {
        const { nowPlaying } = this.props;
        const renderMovies = nowPlaying.map((movie) => <Movie movie={movie} key={movie.id} />)
        return(
            <div className="ui container display-container">
                <h2 className="ui center aligned icon header">
                    <i className="circular video icon"></i>
                        Now Playing Movies
                </h2>
                <div className="movies-list item-list">
                    {renderMovies}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      nowPlaying: state.nowPlaying,
    };
  };

export default connect(mapStateToProps, {getNowPlaying}) (NowPlaying);
