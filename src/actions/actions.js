import * as types from './types';
import { ROOT } from '../../webpack.config';
import axios from 'axios';

const URL = 'https://api.github.com/search/repositories';

// ?q=test+in:name


// SEARCH FOR REPOSITORY BY NAME
export function fetchRepoByName (searchInput) {
    return function (dispatch) {
        dispatch(fetchRepoByNameRequest());
        axios.get(`${URL}?q=${searchInput}+in:name`)
        .then (res => {
            dispatch(fetchRepoByNameSuccess(res.data.items));
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