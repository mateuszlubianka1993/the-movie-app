import React from 'react';
import {connect} from 'react-redux';
import {getPopularPeople} from '../actions';
import Person from './Person';

class Home extends React.Component {

    componentDidMount() {
        this.props.getPopularPeople();
    };

    render() {

        const {popularPeople} = this.props;
        const renderPeople = popularPeople.map((person) => <Person person={person} key={person.id} />)

        return(
            <div className="ui container">
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                        Popular People
                </h2>
                <div className="people-list">
                    {renderPeople}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      popularPeople: state.popularPeople,
    };
  };

export default connect(mapStateToProps, {getPopularPeople}) (Home);
