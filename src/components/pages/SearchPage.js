import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import RepoSnippit from '../RepoSnippit';
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        };
        this.handlechange = this.handlechange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handlechange (e) {
        e.preventDefault();
        this.setState({
            searchInput: e.target.value
        });
    }

    handleClick (e) {
        e.preventDefault();
        this.props.fetchRepoByName(this.state.searchInput);
    }

    render() {
        return (
            <div className='component-SearchPage'>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        {this.props.loading && (
                        <Spinner name="ball-scale-ripple-multiple" color="coral" fadeIn="none"/>
                        )}
                        <div className="control">
                            <input className="input is-medium" onChange={this.handlechange} type="text" placeholder="type repository name here"/>
                        </div>
                        <button className="button is-primary" onClick={this.handleClick}>Search</button>
                         {this.props.repos.map(repo => <RepoSnippit
                            key={repo.id}
                            avatar={repo.owner['avatar_url']}
                            owner={repo.owner.login}
                            name={repo.name}

                        
                        />)} 
                    </div>
                </div>
            </div>
            );


    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchRepoByName: (searchInput) => {
            dispatch(actions.fetchRepoByName(searchInput));
        }
    };
}

function mapStateToProps (state) {
    return {
        repos: state.repos,
        loading: state.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


SearchPage.PropTypes = {
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired
};