import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';
import topShowsReducer from './topShowsReducer';

export default combineReducers({
    topMovies: topMoviesReducer,
    topShows: topShowsReducer
});