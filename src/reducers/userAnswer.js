import { USER_ANSWER } from '../actions/userAnswer';

export default function userAnswer(state = '', action) {
    switch (action.type) {
        case USER_ANSWER:
            return action.userAnswer;
        default:
            return state;
    }
}
