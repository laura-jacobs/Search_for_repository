import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/RepoSnippit.css';


class RepoSnippit extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="component-RepoSnippit box">
                <article className='media'>
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={this.props.avatar} alt="user-avatar" />
                        </figure>
                    </div>
                </article>
                <div className="media-content">
                        <h3>Owned by: <span className='snippit-info'>{this.props.owner}</span></h3>
                        <h3>Repository Name: <span className='snippit-info'>{this.props.name}</span></h3>
                        <h3>Description: <span className='snippit-info'>{this.props.description}</span></h3>
                    <div className="content">
                       <Link to={`/repos/:${this.props.owner}/:${this.props.name}`}><span id='repo-link'>More details</span></Link>

                    </div>

                </div>

            </div>

        );
    }
}

export default RepoSnippit;

RepoSnippit.propTypes = {
    avatar: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
};