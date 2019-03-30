import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyHistoryDisplay extends Component {
    render() {
        const { history } = this.props;
        const operationObj = {
            addition: '+',
            subtraction: '-',
            multiplication: 'x',
            division: '/',
        };
        return (
            <section className="history">
                <h1>My History</h1>
                <ul>
                    {history.map((eachItem, index) => (
                        <li key={index}>
                            {eachItem.numTwo} {operationObj[eachItem.operation]}{' '}
                            {eachItem.numOne} = {eachItem.correctAnswer}. You
                            put {eachItem.userAnswer} - Status{' '}
                            {eachItem.answerStatus}
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
function mapStateToProps({ history }) {
    return {
        history,
    };
}
export default connect(mapStateToProps)(MyHistoryDisplay);
