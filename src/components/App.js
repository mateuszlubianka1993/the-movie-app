import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import TopMovies from './TopMovies';
import TopShows from './TopShows';
import Search from './Search';
import NowPlaying from './NowPlaying';

class App extends React.Component {
    
    render() {
        return(
            <div className="app-container">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header />
                        <NavBar />
                        <Route path="/" exact component={Home} />
                        <Route path="/top-movies" component={TopMovies} />
                        <Route path="/top-shows" component={TopShows} />
                        <Route path="/now-playing" component={NowPlaying} />
                        <Route path="/search" component={Search} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;
