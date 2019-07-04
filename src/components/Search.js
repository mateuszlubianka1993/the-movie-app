import React from 'react';
import {connect} from 'react-redux';
import {getInputValue, getSearched} from '../actions';
import Movie from './Movie';
import Show from './Show';
import Person from './Person';
import '../styles/display-items.css';
import '../styles/Search.css';

class Search extends React.Component {

    render() {
        const {inputValue, searched} = this.props; 
        const renderResults = () => {
            if(searched.length!==0) {
                return searched.map((x) => {
                    if(x.media_type==='tv') {
                        return <Show show={x} key={x.id} />
                    } else if(x.media_type==='movie') {
                        return <Movie movie={x} key={x.id} />
                    } else if(x.media_type==='person') {
                        return <Person person={x} key={x.id} />
                    } else return null;
                });
            } else {
                return <h2 className="search-header">Search your favourite movie, TV show or famous actors...</h2>;
            };
        };

        return(
            <div className="ui container display-container">
                <form onSubmit={(e)=>this.props.getSearched(e, inputValue)} className="ui action big fluid input search-form">
                    <input onChange={(e)=>this.props.getInputValue(e.target.value)} required type="text" placeholder="Movie, TV or person..."/>
                    <button className="ui positive button">Search</button>
                </form>
                <div className="search-list item-list">
                    {renderResults()}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      inputValue: state.inputValue,
      searched: state.searched
    };
  };

export default connect(mapStateToProps, {getInputValue, getSearched}) (Search);
