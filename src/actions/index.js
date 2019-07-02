import tmdAPI from '../apis/tmdAPI';

const key = '3e47509c5e108f3c61f81a43fdd0bb7c';

export const getTopMovies = () => {
    
    return async function(dispatch) {
        const response = await tmdApi.get('/movie/top_rated', {
            params: { api_key: key },
            
        });
        const result = response.data.results;

        dispatch({type: 'GET_TOP_MOVIES', payload: result })
    };

}