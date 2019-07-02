import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';

export default combineReducers({
    topMovies: topMoviesReducer,
});