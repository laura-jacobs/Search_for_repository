import * as types from './types';
import axios from 'axios';

import { auth_token } from '../authorisation';

const URL = 'https://api.github.com';

// SEARCH FOR REPOSITORY BY NAME
export function fetchRepoByName (searchInput) {
    if(!searchInput) {
        return;
    }
    return function (dispatch) {
        dispatch(fetchRepoByNameRequest());
        dispatch(fetchPaginationRequest());
        axios.get(`${URL}/search/repositories?q=${searchInput}+in:name&page=1`, {
            headers: { 'Authorization': auth_token }
        })
            .then(res => {
                console.log(res);
                dispatch(fetchRepoByNameSuccess(res.data.items));
                if (res.headers && res.headers.link){
                    dispatch(fetchPaginationSuccess(res.headers.link));
                }
            })
            .catch(err => {
                dispatch(fetchRepoByNameError(err));
            });
    };
}

export function fetchRepoByNameRequest () {
    return {
        type: types.FETCH_REPO_BY_NAME_REQUEST
    };
}

export function fetchRepoByNameSuccess (repos) {
    return {
        type: types.FETCH_REPO_BY_NAME_SUCCESS,
        data: repos
    };
}

export function fetchRepoByNameError (error) {
    return {
        type: types.FETCH_REPO_BY_NAME_ERROR,
        data: error
    };
}

// SEARCH REPOS BY LINK
export function fetchReposByLink (link) {
    if(!link) {
        return;
    }
    return function (dispatch) {
        dispatch(fetchRepoByNameRequest());
        dispatch(fetchPaginationRequest());
        axios.get(link, {
            headers: { 'Authorization': auth_token }
        })
            .then(res => {
                console.log(res);
                dispatch(fetchRepoByNameSuccess(res.data.items));
                if (res.headers && res.headers.link){
                    dispatch(fetchPaginationSuccess(res.headers.link));
                }
            })
            .catch(err => {
                dispatch(fetchRepoByNameError(err));
            });
    };
}

export function fetchPaginationRequest () {
    return {
        type: types.FETCH_PAGINATION_REQUEST
    };
}

export function fetchPaginationSuccess (link) {
    return {
        type: types.FETCH_PAGINATION_SUCCESS,
        data: link
    };
}

// GET REPO INFO
export function fetchRepo (user, repoName) {
    return function (dispatch) {
        dispatch(fetchRepoRequest());
        axios.get(`${URL}/repos/${user}/${repoName}`, {
            headers: { 'Authorization': auth_token }
        })
            .then(res => {
                dispatch(fetchRepoSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchReadMeError(err));
            });
    };
}

export function fetchRepoRequest () {
    return {
        type: types.FETCH_REPO_REQUEST
    };
}

export function fetchRepoSuccess (repoInfo) {
    return {
        type: types.FETCH_REPO_SUCCESS,
        data: repoInfo
    };
}

export function fetchRepoError (error) {
    return {
        type: types.FETCH_REPO_ERROR,
        data: error
    };
}

// GET README FOR REPOSITORY
export function fetchReadMe (user, repoName) {
    return function (dispatch) {
        dispatch(fetchReadMeRequest());
        axios.get(`${URL}/repos/${user}/${repoName}/readme`, {
            headers: { 'Authorization': auth_token }
        })
            .then(res => {
                dispatch(fetchReadMeSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchReadMeError(err));
            });
    };
}

export function fetchReadMeRequest () {
    return {
        type: types.FETCH_README_REQUEST
    };
}

export function fetchReadMeSuccess (repoInfo) {
    return {
        type: types.FETCH_README_SUCCESS,
        data: repoInfo
    };
}

export function fetchReadMeError (error) {
    return {
        type: types.FETCH_README_ERROR,
        data: error
    };
}

// CONVERT DECODED README TO MARKDOWN HTML
export function fetchReadMeHtml (decodedReadMe) {
    return function (dispatch) {
        dispatch(fetchReadMeHtmlRequest());
        axios.post(`${URL}/markdown`, {
            text: `${decodedReadMe}`,
            headers: { 'Authorization': auth_token }
        })
            .then(res => {
                dispatch(fetchReadMeHtmlSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchReadMeHtmlError(err));
            });
    };
}

export function fetchReadMeHtmlRequest () {
    return {
        type: types.FETCH_README_HTML_REQUEST
    };
}

export function fetchReadMeHtmlSuccess (readMeHtml) {
    return {
        type: types.FETCH_README_HTML_SUCCESS,
        data: readMeHtml
    };
}

export function fetchReadMeHtmlError (error) {
    return {
        type: types.FETCH_README_HTML_ERROR,
        data: error
    };
}

