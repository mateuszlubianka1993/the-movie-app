import React from 'react';

class Home extends React.Component {

    render() {
        return(
            <div className="ui container">
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                        Popular People
                </h2>
                <div className="people-list">
                    
                </div>
            </div>
        );
    };
}

export default Home;
