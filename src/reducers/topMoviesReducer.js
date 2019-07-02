export default (state = [], action) => {
    switch(action.type) {
        case 'GET_TOP_MOVIES':
            return action.payload
        default:
            return state;
    };
};