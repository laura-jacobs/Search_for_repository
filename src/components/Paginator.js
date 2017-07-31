import React from 'react';
import PropTypes from 'prop-types';
import './styles/Paginator.css';


class Paginator extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="component-pageButtons">
                <nav aria-label="...">
                    <ul className="pager">
                        <li>
                            <button id='next' className="pagination button is-primary" onClick={this.props.handleNextPagination} >Previous</button>
                        </li>
                        <li><button id='prev' className="pagination button is-primary" onClick={this.props.handlePrevPagination}>Next</button></li>
                    </ul>
                </nav>
            </div>
        );

    }
}

export default Paginator;

Paginator.propTypes = {
    handleNextPagination: PropTypes.func.isRequired,
    handlePrevPagination: PropTypes.func.isRequired
};