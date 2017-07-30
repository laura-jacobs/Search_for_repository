import React from 'react';
import {Link} from 'react-router-dom';

class RepoSnippit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <h3>Owned by: {this.props.owner}</h3>
                        <h3>Repository Name: {this.props.name}</h3>
                    <div className="content">
                       <Link to={`/repos/:${this.props.owner}/:${this.props.name}`}>More details</Link>

                    </div>

                </div>

            </div>

        );
    }
}

export default RepoSnippit;