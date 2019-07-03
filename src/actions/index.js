import tmdApi from '../apis/tmdAPI';

const key = '3e47509c5e108f3c61f81a43fdd0bb7c';

    export const getTopMovies = () => async dispatch => {
        const response = await tmdApi.get('/movie/top_rated', {
            params: { api_key: key },
            
        });
        const result = response.data.results;

        dispatch({type: 'GET_TOP_MOVIES', payload: result })
    };

    export const getTopShows = () => async dispatch => {
        const response = await tmdApi.get('/tv/top_rated', {
            params: { api_key: key },
            
        });
        const result = response.data.results;

        dispatch({type: 'GET_TOP_SHOWS', payload: result })
    };

    export const getNowPlaying = () => async dispatch => {
        const response = await tmdApi.get('/movie/now_playing', {
            params: { api_key: key },
            
        });
        const result = response.data.results;

        dispatch({type: 'GET_NOW_PLAYING', payload: result })
    };

    export const getPopularPeople = () => async dispatch => {
        const response = await tmdApi.get('/person/popular', {
            params: { api_key: key },
            
        });
        const result = response.data.results;

        dispatch({type: 'GET_POPULAR_PEOPLE', payload: result })
    };

    export const getInputValue = (data) => {
        return {
            type: 'GET_INPUT_VALUE',
            payload: data
        }
    };

    export const getSearched = (e, iValue) => async dispatch  => {
        e.preventDefault();
        
        const response = await tmdApi.get('/search/multi', {
            params: { 
                api_key: key,
                query: iValue },
            
        });

        const result = response.data.results;

        dispatch({
            type: 'GET_SEARCHED', 
            payload: result 
        })
    }
