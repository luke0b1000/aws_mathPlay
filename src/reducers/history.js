import {
    ADD_QUESTION_TO_HISTORY,
    RECEIVE_HISTORY,
    CLEAR_HISTORY,
} from '../actions/history';

export default function history(state = [], action) {
    switch (action.type) {
        case RECEIVE_HISTORY:
            return action.historyArr;
        case ADD_QUESTION_TO_HISTORY:
            return [...state, action.oneQuestionObj];
        case CLEAR_HISTORY:
            return [];
        default:
            return state;
    }
}

/*
history: [
    {
        Date, Date.now() 1548705198152
        numOne,
        operation,
        numTwo,
        correctAnswer,
        userAnswer

    },
    {
        ...
    }
]
*/
