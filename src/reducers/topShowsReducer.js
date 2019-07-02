export default (state = [], action) => {
    switch(action.type) {
        case 'GET_SHOWS_MOVIES':
            return action.payload
        default:
            return state;
    };
};