import React from 'react';
import {connect} from 'react-redux';
import {getTopShows} from '../actions';

class TopShows extends React.Component {

    componentDidMount(){
        this.props.getTopShows();
    }

    render() {
        const { topShows } = this.props;
        const renderMovies = ''
        return(
            <div>TopShows</div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      topShows: state.topShows,
    };
  };

export default connect(mapStateToProps, {getTopShows}) (TopShows);
