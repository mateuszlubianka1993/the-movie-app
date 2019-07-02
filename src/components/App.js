import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';

class App extends React.Component {
    
    render() {
        return(
            <div className="app-container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <NavBar />
                        <Route path="/" exact component={Home} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;
