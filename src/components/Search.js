import React from 'react';
import {connect} from 'react-redux';
import {getInputValue} from '../actions';

class Search extends React.Component {

    render() {
        const {inputValue} = this.props;
        return(
            <div className="ui container">
                <form className="ui action big fluid input">
                    <input onChange={(e)=>this.props.getInputValue(e.target.value)} type="text" placeholder="Search movie, TV show or person..."/>
                    <button className="ui positive button">Search</button>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      inputValue: state.inputValue,
    };
  };

export default connect(mapStateToProps, {getInputValue}) (Search);
