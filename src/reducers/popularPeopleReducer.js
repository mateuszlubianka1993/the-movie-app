export default (state = [], action) => {
    switch(action.type) {
        case 'GET_POPULAR_PEOPLE':
            return action.payload
        default:
            return state;
    };
};