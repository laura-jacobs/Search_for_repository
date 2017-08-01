import React from 'react';
import PropTypes from 'prop-types';
import './styles/Paginator.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Paginator extends React.Component {
    constructor (props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext (e) {
        e.preventDefault();
        if (this.props.paginationInfo.next) {
            this.props.fetchReposByLink(this.props.paginationInfo.next.url);
        }
    }

    handlePrev (e) {
        e.preventDefault();
        if (this.props.paginationInfo.prev) {
            this.props.fetchReposByLink(this.props.paginationInfo.prev.url);
        }
    }

    render () {
        if (!this.props || !this.props.paginationInfo) {
            return null;
        }
        const paginationInfo = this.props.paginationInfo;
        return (
            <div className="component-pageButtons">
                <nav aria-label="...">
                    <ul className="pager">
                        {paginationInfo.prev && (<li><button id='prev' className="pagination button is-primary" onClick={this.handlePrev}>Previous</button></li>)}
                        {paginationInfo.next && (<li><button id='next' className="pagination button is-primary" onClick={this.handleNext}>Next</button></li>)}
                        
                    </ul>
                </nav>
            </div>
        );

    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchReposByLink: (link) => {
            dispatch(actions.fetchReposByLink(link));
        }
    };
}

function mapStateToProps (state) {
    return {
        paginationInfo: state.searchPaginationInfo
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);

Paginator.propTypes = {
    paginationInfo: PropTypes.object,
    fetchReposByLink: PropTypes.func.isRequired
};