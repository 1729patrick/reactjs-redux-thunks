import axios from 'axios';

// actions types
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';


// action creators
export function isFetching(bool) {
    return {
        type: IS_FETCHING,
        isLoading: bool
    }
}

export function fetchedError(err) {
    return {
        type: FETCHED_ERROR,
        error: err
    }
}

export function fetched(data) {
    return {
        type: FETCHED,
        data: data
    }
}


// thunk

export function thunkFetchData() {
    return async (dispatch)=> {
        dispatch(isFetching(true));
        try{
            const { data } = await axios.get('http://api.icndb.com/jokes');

            dispatch(fetched(data.value));
            dispatch(isFetching(false));

        }catch (e) {
            dispatch(fetchedError(e));
            dispatch(isFetching(false));
        }
    }
}
