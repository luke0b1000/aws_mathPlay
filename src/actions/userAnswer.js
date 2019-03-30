export const USER_ANSWER = 'USER_ANSWER';

export function inputAnswer(userAnswer) {
    return {
        type: USER_ANSWER,
        userAnswer,
    };
}
