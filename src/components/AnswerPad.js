import React, { Component } from 'react';
import MyButtons from './MyButtons';
import InputBox from './InputBox';

class AnswerPad extends Component {
    render() {
        return (
            <section>
                <InputBox
                    newQuestion={this.props.newQuestion}
                    history={this.props.history}
                />
                <MyButtons newQuestion={this.props.newQuestion} />
            </section>
        );
    }
}
export default AnswerPad;
