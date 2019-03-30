export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';
export const ADD_QUESTION_TO_HISTORY = 'ADD_QUESTION_TO_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export function receiveHistory(historyArr) {
    return {
        type: RECEIVE_HISTORY,
        historyArr,
    };
}

export function addQuestionToHistory(oneQuestionObj) {
    //    this.props.LocalStorage.addMathPlayHistory(oneQuestionObj);
    return {
        type: ADD_QUESTION_TO_HISTORY,
        oneQuestionObj,
    };
}

export function clearHistory() {
    return {
        type: CLEAR_HISTORY,
    };
}
