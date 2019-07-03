import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';
import topShowsReducer from './topShowsReducer';
import nowPlayingReducer from './nowPlayingReducer';
import popularPeopleReducer from './popularPeopleReducer';
import inputValueReducer from './inputValueReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    topMovies: topMoviesReducer,
    topShows: topShowsReducer,
    nowPlaying: nowPlayingReducer,
    popularPeople: popularPeopleReducer,
    inputValue: inputValueReducer,
    searched: searchReducer
});