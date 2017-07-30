import * as types from '../actions/types';

const initialState = {
    repos: [],
    loading: false,
    error: null

};

function reducer(prevState = initialState, action) {
    if (!action) return prevState;
    const newState = Object.assign({}, prevState);

    if (action.type === types.FETCH_REPO_BY_NAME_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.loading = true;
        return newState;
    }
    if (action.type === types.FETCH_REPO_BY_NAME_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.repos = action.data;
        newState.loading = false;
        console.log(newState.repos)
        return newState;
    }
    if (action.type === types.FETCH_REPO_BY_NAME_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.error = action.data;
        newState.loading = false;
        return newState;
    }


    return newState;
}

export default reducer;