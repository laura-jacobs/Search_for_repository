import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/actions';
import ReadMe from '../ReadMe';
import PropTypes from 'prop-types';
import '../styles/RepoPage.css';


class RepoPage extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        const repoUser = this.props.match.params.user.replace(':', '');
        const repoName = this.props.match.params.name.replace(':', '');
        this.props.fetchRepo(repoUser, repoName);
        this.props.fetchReadMe(repoUser, repoName);


    }

    renderRepoInfo () {
        let readMe = null;
        if (this.props.repoReadMe) {
            readMe = (<ReadMe
            readMeInfo={this.props.repoReadMe}
            />);
        }
        return (
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="panel">
                        <div id='repo-info' className="card">
                           <Link id='back-button' to='/' className='button is-primary'>Back</Link>
                        <div className="card-content">
                            <div className="avatar">
                            <img id='repo-avatar' src={this.props.repoInfo.owner.avatar_url} alt="user-avatar" />
                            </div>
                            <div className="info">
                            <p><span className='repo-info-title' >Repository name: </span><span className='repo-details' >{this.props.repoInfo.name}</span></p>
                            <p><span className='repo-info-title' >Repository description: </span><span className='repo-details' >{this.props.repoInfo.description}</span></p>
                            
                            <p><span className='repo-info-title' >Repo is owned by: </span><span className='repo-details' >{this.props.repoInfo.owner.login}</span></p>
                            <p><span className='repo-info-title' >Repo is private: </span><span className='repo-details' >{this.props.repoInfo.private.toString()}</span></p>
                            <p><span className='repo-info-title' >Number of forks: </span><span className='repo-details' >{this.props.repoInfo.forks_count}</span></p>
                            <p><span className='repo-info-title' >Number of open issues: </span><span className='repo-details' >{this.props.repoInfo.open_issues_count}</span></p>
                            <p><span className='repo-info-title' >Language: </span><span className='repo-details' >{this.props.repoInfo.language}</span></p>
                            <p><span className='repo-info-title' >Repo Link: </span><span className='repo-details' ><a href={this.props.repoInfo.html_url}>{this.props.repoInfo.html_url}</a></span></p>
                            </div>
                        </div>
                        </div>
                            {readMe}

                    </div>
                </div>

            </div>
        );
    }

    render () {
        let ownerInfo = null;
        if (this.props.repoInfo) {
            ownerInfo = this.renderRepoInfo();
        }
        return (
            <div className="component-RepoPage">
                {this.props.loading && (
                    <Spinner name="ball-scale-ripple-multiple" color="coral" fadeIn="none" />
                )}
                {ownerInfo}

            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchReadMe: (user, repoName) => {
            dispatch(actions.fetchReadMe(user, repoName));
        },
        fetchRepo: (user, repoName) => {
            dispatch(actions.fetchRepo(user, repoName));
        }
    };
}

function mapStateToProps (state) {
    return {
        repoInfo: state.repoInfo,
        repoReadMe: state.repoReadMe,
        loading: state.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);

RepoPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    fetchRepo: PropTypes.func.isRequired,
    fetchReadMe: PropTypes.func.isRequired,
    repoInfo: PropTypes.object.isRequired,
    repoReadMe: PropTypes.object,
    match: PropTypes.object.isRequired
};