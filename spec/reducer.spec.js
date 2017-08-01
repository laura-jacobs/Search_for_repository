import {
    expect
} from 'chai';
import Reducer from '../src/reducer/reducer';
import * as actions from '../src/actions/actions';
import parseLink from 'parse-link-header';

describe('REDUCER', function () {
    it('is a function', () => {
        expect(Reducer).to.be.a('function');
    });
    describe('action: FetchRepoByName', () => {
        const initialState = {
            repos: [],
            loading: false,
            error: null,
            repoInfo: null,
            repoReadMe: null,
            readMeHtml: null

        };
        it('REQUEST: returns the updated state', () => {
            const action = actions.fetchRepoByNameRequest();
            const newState = Reducer(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('SUCCESS: returns the updated state', () => {
            const action = actions.fetchRepoByNameSuccess([{ repo1: 'this is repo 1' }]);
            const newState = Reducer(initialState, action);
            expect(newState.repos).to.eql([{ repo1: 'this is repo 1' }]);
            expect(newState.loading).to.be.false;
        });
        it('ERROR: returns the updated state', () => {
            const action = actions.fetchRepoByNameError('error');
            const newState = Reducer(initialState, action);
            expect(newState.error).to.equal('error');
            expect(newState.loading).to.be.false;
        });
    });
    describe('action: fetchRepo', () => {
        const initialState = {
            repos: [],
            loading: false,
            error: null,
            repoInfo: null,
            repoReadMe: null,
            readMeHtml: null

        };
        it('REQUEST: returns the updated state', () => {
            const action = actions.fetchRepoRequest();
            const newState = Reducer(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('SUCCESS: returns the updated state', () => {
            const action = actions.fetchRepoSuccess({ login: '@laura' });
            const newState = Reducer(initialState, action);
            expect(newState.repoInfo).to.eql({ login: '@laura' });
            expect(newState.loading).to.be.false;
        });
        it('ERROR: returns the updated state', () => {
            const action = actions.fetchRepoError('error');
            const newState = Reducer(initialState, action);
            expect(newState.error).to.equal('error');
            expect(newState.loading).to.be.false;
        });
    });
    describe('action: fetchReadMe', () => {
        const initialState = {
            repos: [],
            loading: false,
            error: null,
            repoInfo: null,
            repoReadMe: null,
            readMeHtml: null

        };
        it('REQUEST: returns the updated state', () => {
            const action = actions.fetchReadMeRequest();
            const newState = Reducer(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('SUCCESS: returns the updated state', () => {
            const action = actions.fetchReadMeSuccess('this is the readme');
            const newState = Reducer(initialState, action);
            expect(newState.repoReadMe).to.equal('this is the readme');
            expect(newState.loading).to.be.false;
        });
        it('ERROR: returns the updated state', () => {
            const action = actions.fetchReadMeError('error');
            const newState = Reducer(initialState, action);
            expect(newState.error).to.equal('error');
            expect(newState.loading).to.be.false;
        });
    });
    describe('action: fetchReadMeHtml', () => {
        const initialState = {
            repos: [],
            loading: false,
            error: null,
            repoInfo: null,
            repoReadMe: null,
            readMeHtml: null

        };
        it('REQUEST: returns the updated state', () => {
            const action = actions.fetchReadMeHtmlRequest();
            const newState = Reducer(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('SUCCESS: returns the updated state', () => {
            const action = actions.fetchReadMeHtmlSuccess('<p>I am the html</p>');
            const newState = Reducer(initialState, action);
            expect(newState.readMeHtml).to.equal('<p>I am the html</p>');
            expect(newState.loading).to.be.false;
        });
        it('ERROR: returns the updated state', () => {
            const action = actions.fetchReadMeHtmlError('error');
            const newState = Reducer(initialState, action);
            expect(newState.error).to.equal('error');
            expect(newState.loading).to.be.false;
        });
    });
    describe('action: fetchReposByLink', () => {
        const initialState = {
            repos: [],
            loading: false,
            error: null,
            repoInfo: null,
            repoReadMe: null,
            readMeHtml: null,
            searchPaginationInfo: 'old link'

        };
        it('REQUEST: returns the updated state', () => {
            const action = actions.fetchPaginationRequest();
            const newState = Reducer(initialState, action);
            expect(newState.searchPaginationInfo).to.be.null;
        });
        it('SUCCESS: returns the updated state', () => {
            const link = '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel="next"'
            const action = actions.fetchPaginationSuccess(link);
            const newState = Reducer(initialState, action);
            const parsed = parseLink(link)
            expect(newState.searchPaginationInfo).to.eql(parsed);
        });
    });
});