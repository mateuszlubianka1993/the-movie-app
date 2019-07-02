import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';
import topShowsReducer from './topShowsReducer';
import nowPlayingReducer from './nowPlayingReducer';

export default combineReducers({
    topMovies: topMoviesReducer,
    topShows: topShowsReducer,
    nowPlaying: nowPlayingReducer
});