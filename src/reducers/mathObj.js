import { RECEIVE_MATHOBJ } from '../actions/mathObj';

export default function mathObj(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MATHOBJ:
            return action.mathObj;
        default:
            return state;
    }
}
