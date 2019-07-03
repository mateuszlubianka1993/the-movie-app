import React from 'react';

class Search extends React.Component {

    render() {
        return(
            <div className="ui container">
                <form className="ui action big fluid input">
                    <input type="text" placeholder="Search movie, TV show or person..."/>
                    <button className="ui positive button">Search</button>
                </form>
            </div>
        );
    };
}

export default Search;
