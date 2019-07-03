import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';
import topShowsReducer from './topShowsReducer';
import nowPlayingReducer from './nowPlayingReducer';
import popularPeopleReducer from './popularPeopleReducer';

export default combineReducers({
    topMovies: topMoviesReducer,
    topShows: topShowsReducer,
    nowPlaying: nowPlayingReducer,
    popularPeople: popularPeopleReducer
});