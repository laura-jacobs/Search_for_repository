import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import RepoSnippit from '../RepoSnippit';
import PropTypes from 'prop-types';
import Paginator from '../Paginator';

import '../styles/SearchPage.css';

class SearchPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchInput: ''
        };
        this.handlechange = this.handlechange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setMinHeight();
    }

    componentWillReceiveProps() {
        this.setMinHeight();
    }

    setMinHeight() {
        let mainStyle = {
            minHeight: (window.innerHeight - 325) + 'px'
        };
        this.setState({mainStyle: mainStyle});
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

    render () {
        let pagination = null;
        if (this.props.repos.length > 0) {
            pagination = (
                <div className='page-buttons'>
                    <Paginator />
                </div>
            );
        }
        return (
            <div className='component-SearchPage' style={this.state.mainStyle}>
                {this.props.loading && (
                    <Spinner name="ball-scale-ripple-multiple" color="#2ECC71" fadeIn="none" />
                )}
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="control">
                            <form onSubmit={this.handleClick} type='submit' action="">

                                <input className="input is-medium" onChange={this.handlechange} type="text" placeholder="type repository name here" />
                            </form>
                        </div>
                        <button id='search-button'className="search button is-primary" onClick={this.handleClick}>Search</button>
                        {pagination}
                        {this.props.repos.map(repo => <RepoSnippit
                            key={repo.id}
                            avatar={repo.owner['avatar_url']}
                            owner={repo.owner.login}
                            name={repo.name}
                            description={repo.description}


                        />)}
                        {pagination}
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


SearchPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired,
    fetchRepoByName: PropTypes.func.isRequired
};