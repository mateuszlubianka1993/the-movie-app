export default (state = [], action) => {
    switch(action.type) {
        case 'GET_TOP_SHOWS':
            return action.payload
        default:
            return state;
    };
};