export default (state = {}, action ) => {
    switch (action.type) {
        case 'ACTION_1':
            return action.payload;
        default:
            return state

    }
}
