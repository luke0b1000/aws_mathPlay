import React, { Component } from 'react';
import EquationDisplay from './EquationDisplay';
import AnswerPad from './AnswerPad';
import MyMath from '../utils/myMath';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { receiveMathObj } from '../actions/mathObj';
import { inputAnswer } from '../actions/userAnswer';
import myHistory from '../utils/myHistory';
import MyHistoryDisplay from './MyHistoryDisplay';
import { receiveHistory, addQuestionToHistory } from '../actions/history';
import { playcorrect, playincorrect } from '../utils/Sound';

class Main extends Component {
    constructor() {
        super();
        this.history = new myHistory();
    }
    playSound = answerStatus => {
        if (this.props.settingSound) {
            if (answerStatus === 'correct') {
                playcorrect();
            } else {
                playincorrect();
            }
        }
    };
    addQuestionToHistory = () => {
        const { userAnswer, correctAnswer } = this.props;
        let answerStatus =
            correctAnswer === Number(userAnswer) ? 'correct' : 'incorrect';
        this.playSound(answerStatus);
        let oneQuestionObj = {
            date: Date.now(),
            numOne: this.props.numOne,
            numTwo: this.props.numTwo,
            operation: this.props.operation,
            correctAnswer: this.props.correctAnswer,
            userAnswer: Number(this.props.userAnswer),
            answerStatus,
        };
        this.props.addQuestionToHistory(oneQuestionObj);
    };
    newQuestion = (store = false) => {
        if (store) this.addQuestionToHistory();
        this.equation = new MyMath({
            operationArray: this.props.settingOperationArray,
            level: this.props.settingLevel,
        });
        this.props.receiveMathObj(this.equation.mathObj());
        this.props.inputAnswer('');
    };
    answer = e => {
        const { settingAutoCheck, userAnswer, correctAnswer } = this.props;
        // If no answer just return
        if (userAnswer.length === 0) return;
        if (settingAutoCheck) {
            let NumUserAnswer = Number(userAnswer);
            let answerState = correctAnswer === NumUserAnswer ? true : false;
            if (!answerState) {
                return;
            }
            this.newQuestion(true);
        }
    };
    componentDidMount() {
        this.newQuestion();
        if (this.props.settingHistory) {
            let history = this.props.LocalStorage.getHistoryObject();
            this.props.receiveHistory(history);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.userAnswer !== this.props.userAnswer) {
            this.answer();
        }
    }
    render() {
        return (
            <div>
                <EquationDisplay />
                <AnswerPad
                    newQuestion={this.newQuestion}
                    history={this.history}
                />
                {this.props.settingHistory ? (
                    <MyHistoryDisplay history={this.history.allHistory()} />
                ) : null}
            </div>
        );
    }
}
function mapStateToProps({ mathObj, settings, userAnswer }) {
    const { numOne, numTwo, correctAnswer, operation } = mathObj;
    const {
        settingAutoCheck,
        settingHistory,
        settingLevel,
        settingOperation,
        settingSound,
    } = settings;
    const settingOperationArray = [];
    for (let prop in settingOperation) {
        if (settingOperation[prop]) settingOperationArray.push(prop);
    }
    return {
        numOne,
        numTwo,
        correctAnswer,
        operation,
        settingOperationArray,
        settingLevel,
        settingHistory,
        settingAutoCheck,
        settingSound,
        userAnswer,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            receiveHistory,
            receiveMathObj,
            inputAnswer,
            addQuestionToHistory,
        },
        dispatch
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
