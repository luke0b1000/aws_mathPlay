export const ADDITION = 'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const MULTIPLICATION = 'MULTIPLICATION';
export const DIVISION = 'DIVISION';
export const LEVEL_CHANGE = 'LEVEL_CHANGE';
export const HISTORY_STATUS = 'HISTORY_STATUS';
export const AUTO_CHECK = 'AUTO_CHECK';
export const SOUND = 'SOUND';

export function toggleAddition() {
    return {
        type: ADDITION,
    };
}
export function toggleSubtraction() {
    return {
        type: SUBTRACTION,
    };
}
export function toggleMultiplication() {
    return {
        type: MULTIPLICATION,
    };
}
export function toggleDivision() {
    return {
        type: DIVISION,
    };
}
export function levelChange(level) {
    return {
        type: LEVEL_CHANGE,
        level,
    };
}
export function toggleHistory() {
    return {
        type: HISTORY_STATUS,
    };
}

export function toggleAutoCheck() {
    return {
        type: AUTO_CHECK,
    };
}
export function toggleSound() {
    return {
        type: SOUND,
    };
}
