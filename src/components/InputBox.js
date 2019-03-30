import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inputAnswer } from '../actions/userAnswer';

class InputBox extends Component {
    textChange = e => {
        this.props.inputAnswer(e.target.value);
    };
    render() {
        return (
            <section className="input-box">
                <input
                    id="userAnswer"
                    className="userAnswer"
                    type="number"
                    size="5"
                    name="userAnswer"
                    onChange={this.textChange}
                    value={this.props.userAnswer}
                    autoFocus={true}
                    min="0"
                    placeholder="Type Answer"
                    data-testid="userAnswer"
                />
            </section>
        );
    }
}
function mapStateToProps({ userAnswer }) {
    return {
        userAnswer,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ inputAnswer }, dispatch);
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputBox);
