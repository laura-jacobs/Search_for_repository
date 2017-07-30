import React from 'react';

class RepoSnippit extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="component-RepoSnippit box">
                <h4>Repository is owned by: {this.props.owner}</h4>

            </div>

        );
    }
}

export default RepoSnippit;