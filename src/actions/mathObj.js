export const RECEIVE_MATHOBJ = 'RECEIVE_MATHOBJ';

export function receiveMathObj(mathObj) {
    return {
        type: RECEIVE_MATHOBJ,
        mathObj,
    };
}
