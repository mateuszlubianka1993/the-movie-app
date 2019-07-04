import React from 'react';
import {connect} from 'react-redux';
import {getTopShows} from '../actions';
import Show from './Show';
import '../styles/display-items.css'

class TopShows extends React.Component {

    componentDidMount(){
        this.props.getTopShows();
    }

    render() {
        const { topShows } = this.props;
        const renderShows = topShows.map((show) => <Show show={show} key={show.id} />);
        return(
            <div className="ui container display-container">
                <h2 className="ui center aligned icon header shows-header">
                    <i className="circular tv icon"></i>
                        Top Rated TV Shows
                </h2>
                <div className="shows-list item-list">
                    {renderShows}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      topShows: state.topShows,
    };
  };

export default connect(mapStateToProps, {getTopShows}) (TopShows);
