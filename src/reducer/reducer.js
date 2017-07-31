import * as types from '../actions/types';
import parseLink from 'parse-link-header';

const initialState = {
    repos: [],
    loading: false,
    error: null,
    repoInfo: null,
    repoReadMe: null,
    readMeHtml: null,
    searchPaginationInfo: null
};

function reducer (prevState = initialState, action) {
    if (!action) return prevState;
    const newState = Object.assign({}, prevState);
    
    // SEARCH FOR REPO BY NAME
    if (action.type === types.FETCH_REPO_BY_NAME_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.repos = [];
        newState.loading = true;
        return newState;
    }
    if (action.type === types.FETCH_REPO_BY_NAME_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.repos = action.data;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.FETCH_REPO_BY_NAME_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.error = action.data;
        newState.loading = false;
        return newState;
    }
    // FETCH PAGINATION
     if (action.type === types.FETCH_PAGINATION_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.searchPaginationInfo = null;
        return newState;
    }

     if (action.type === types.FETCH_PAGINATION_SUCCESS) {
        const newState = Object.assign({}, prevState);
        //parse link into an object then set state
        const parsed = parseLink(action.data);
        newState.searchPaginationInfo = parsed;
        return newState;
    }
    // FETCH REPO INFO
    if (action.type === types.FETCH_REPO_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.repoInfo = null;
        newState.loading = true;
        return newState;
    }
    if (action.type === types.FETCH_REPO_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.repoInfo = action.data;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.FETCH_REPO_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.error = action.data;
        newState.loading = false;
        return newState;
    }
    // FETCH REPO README
    if (action.type === types.FETCH_README_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.repoReadMe = null;
        newState.loading = true;
        return newState;
    }
    if (action.type === types.FETCH_README_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.repoReadMe = action.data;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.FETCH_README_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.error = action.data;
        newState.loading = false;
        return newState;
    }

     // FETCH README MARKDOWN
    if (action.type === types.FETCH_README_HTML_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.readMeHtml = null;
        newState.loading = true;
        return newState;
    }
    if (action.type === types.FETCH_README_HTML_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.readMeHtml = action.data;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.FETCH_README_HTML_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.error = action.data;
        newState.loading = false;
        return newState;
    }


    return newState;
}

export default reducer;