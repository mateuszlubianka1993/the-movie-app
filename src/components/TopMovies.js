import React from 'react';
import {connect} from 'react-redux';
import {getTopMovies} from '../actions';

class TopMovies extends React.Component {

    componentDidMount() {
        this.props.getTopMovies();
    }

    render() {
        const { TopMovies } = this.props;
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

const mapStateToProps = (state) => {
    return {
      TopMovies: state.TopMovies,
    };
  };

export default connect(mapStateToProps, {getTopMovies}) (TopMovies);
