import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inputAnswer } from '../actions/userAnswer';

class MyButton extends Component {
    onClick = e => {
        const prevState = this.props.userAnswer;
        this.props.inputAnswer(prevState + e.target.value);
    };
    delClick = () => {
        const prevAnswer = this.props.userAnswer;
        if (prevAnswer.length === 0) return;
        const newAnswer = prevAnswer.slice(0, prevAnswer.length - 1);
        this.props.inputAnswer(newAnswer);
    };
    render() {
        return (
            <section className="num-pad-center">
                <section className="num-pad">
                    <button onClick={this.onClick} value={1}>
                        1
                    </button>
                    <button onClick={this.onClick} value={2}>
                        2
                    </button>
                    <button onClick={this.onClick} value={3}>
                        3
                    </button>
                    <button onClick={this.onClick} value={4}>
                        4
                    </button>
                    <button onClick={this.onClick} value={5}>
                        5
                    </button>
                    <button onClick={this.onClick} value={6}>
                        6
                    </button>
                    <button onClick={this.onClick} value={7}>
                        7
                    </button>
                    <button onClick={this.onClick} value={8}>
                        8
                    </button>
                    <button onClick={this.onClick} value={9}>
                        9
                    </button>
                    <button onClick={this.delClick}>DEL</button>
                    <button onClick={this.onClick} value={0}>
                        0
                    </button>
                    <button onClick={() => this.props.newQuestion(true)}>
                        ENTER
                    </button>
                </section>
            </section>
        );
    }
}

function mapStateToProps({ userAnswer }) {
    return { userAnswer };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ inputAnswer }, dispatch);
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyButton);
