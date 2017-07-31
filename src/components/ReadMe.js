import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Spinner from 'react-spinkit';
import RawHtml from 'react-raw-html';
import PropTypes from 'prop-types';
import './styles/ReadMe.css';

class ReadMe extends React.Component {
    componentDidMount () {
        const decodedMarkDown = atob(this.props.readMeInfo.content);
        this.props.fetchReadMeHtml(decodedMarkDown);
    }
    renderHtml () {
        return (
            <RawHtml.div>{this.props.readMeHtml}</RawHtml.div>
        );
    }
    render () {
        let readMeHtml = null;
        if (this.props.readMeHtml) {
            readMeHtml = this.renderHtml();
        }
        return (
            <div id='read-me' className="card">
                {this.props.loading && (
                    <Spinner name="ball-scale-ripple-multiple" color="coral" fadeIn="none" />
                )}
                <div className="card-content">
                {readMeHtml}

                </div>
                

            </div>

        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchReadMeHtml: (decodedReadMe) => {
            dispatch(actions.fetchReadMeHtml(decodedReadMe));
        }
    };
}

function mapStateToProps (state) {
    return {
        readMeHtml: state.readMeHtml,
        loading: state.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadMe);


ReadMe.propTypes = {
    readMeHtml: PropTypes.string,
    fetchReadMeHtml: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    readMeInfo: PropTypes.object.isRequired
};