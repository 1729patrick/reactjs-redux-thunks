export default function simpleAction() {
    return (dispatch) => {
        dispatch({type: 'ACTION_1', payload: {msg: 'THUNK'}})
    }
}
