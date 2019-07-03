export default (state = '', action) => {
    switch(action.type) {
        case 'GET_INPUT_VALUE':
            return action.payload
        default:
            return state;
    };
};