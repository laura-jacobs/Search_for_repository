import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import * as actions from '../../actions/actions';
import ReadMe from '../ReadMe';
//import PropTypes from 'prop-types';

class RepoPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const repoUser = this.props.match.params.user.replace(':', '');
        const repoName = this.props.match.params.name.replace(':', '');
        this.props.fetchRepo(repoUser, repoName);
        this.props.fetchReadMe(repoUser, repoName);


    }

    renderRepoInfo() {
        let readMe = null;
        if(this.props.repoReadMe){
            readMe = (<ReadMe
            readMeInfo={this.props.repoReadMe}
            />)
        }
        return (
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="card">
                        <div className="card-content">
                            <p>{this.props.repoInfo.owner.login}</p>
                            {readMe}
                        </div>

                    </div>
                </div>

            </div>
        );
    }

    render() {
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

function mapDispatchToProps(dispatch) {
    return {
        fetchReadMe: (user, repoName) => {
            dispatch(actions.fetchReadMe(user, repoName));
        },
        fetchRepo: (user, repoName) => {
            dispatch(actions.fetchRepo(user, repoName));
        }
    };
}

function mapStateToProps(state) {
    return {
        repoInfo: state.repoInfo,
        repoReadMe: state.repoReadMe,
        loading: state.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);