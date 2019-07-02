import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

class App extends React.Component {
    
    render() {
        return(
            <div className="app-container">
                <Header />
                <NavBar />
            </div>
        );
    };
}

export default App;
