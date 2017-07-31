import {
  expect
} from 'chai';
import * as types from '../src/actions/types';
import * as actions from '../src/actions/actions';

describe('ACTIONS', function () {
  describe('fetchRepoByNameRequest', function () {
    it('returns the expected action', function () {
      expect(actions.fetchRepoByNameRequest()).to.eql({
        type: types.FETCH_REPO_BY_NAME_REQUEST
      });
    });
  });
  describe('fetchRepoByNameSuccess', function () {
    it('returns the expected action', function () {
      const repo = { name: 'myRepo', description: 'this is my repo' };
      expect(actions.fetchRepoByNameSuccess(repo)).to.eql({
        type: types.FETCH_REPO_BY_NAME_SUCCESS,
        data: repo
      });
    });
  });
  describe('fetchRepoByNameError', function () {
    it('returns the expected action', function () {
      const error = 'error';
      expect(actions.fetchRepoByNameError(error)).to.eql({
        type: types.FETCH_REPO_BY_NAME_ERROR,
        data: error
      });
    });
  });
  describe('fetchRepoRequest', function () {
    it('returns the expected action', function () {
      expect(actions.fetchRepoRequest()).to.eql({
        type: types.FETCH_REPO_REQUEST
      });
    });
  });
  describe('fetchRepoSuccess', function () {
    it('returns the expected action', function () {
      const repo = { name: 'test', description: 'this is new repo' };
      expect(actions.fetchRepoSuccess(repo)).to.eql({
        type: types.FETCH_REPO_SUCCESS,
        data: repo
      });
    });
  });
  describe('fetchRepoError', function () {
    it('returns the expected action', function () {
      const error = 'error';
      expect(actions.fetchRepoError(error)).to.eql({
        type: types.FETCH_REPO_ERROR,
        data: error
      });
    });
  });
  describe('fetchReadMeRequest', function () {
    it('returns the expected action', function () {
      expect(actions.fetchReadMeRequest()).to.eql({
        type: types.FETCH_README_REQUEST
      });
    });
  });
  describe('fetchReadMeSuccess', function () {
    it('returns the expected action', function () {
      const README = 'this is the readme';
      expect(actions.fetchReadMeSuccess(README)).to.eql({
        type: types.FETCH_README_SUCCESS,
        data: README
      });
    });
  });
  describe('fetchReadMeError', function () {
    it('returns the expected action', function () {
      const error = 'error';
      expect(actions.fetchReadMeError(error)).to.eql({
        type: types.FETCH_README_ERROR,
        data: error
      });
    });
  });
  describe('fetchReadMeHtmlRequest', function () {
    it('returns the expected action', function () {
      expect(actions.fetchReadMeHtmlRequest()).to.eql({
        type: types.FETCH_README_HTML_REQUEST
      });
    });
  });
  describe('fetchReadMeHtmlSuccess', function () {
    it('returns the expected action', function () {
      const readmeHtml = '<P>This is the html</P>';
      expect(actions.fetchReadMeHtmlSuccess(readmeHtml)).to.eql({
        type: types.FETCH_README_HTML_SUCCESS,
        data: readmeHtml
      });
    });
  });
  describe('fetchReadMeHtmlError', function () {
    it('returns the expected action', function () {
      const error = 'error';
      expect(actions.fetchReadMeHtmlError(error)).to.eql({
        type: types.FETCH_README_HTML_ERROR,
        data: error
      });
    });
  });
});

