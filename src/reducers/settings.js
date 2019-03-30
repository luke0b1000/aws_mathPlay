import {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    LEVEL_CHANGE,
    HISTORY_STATUS,
    AUTO_CHECK,
    SOUND,
} from '../actions/settings';

const settingOperation = {
    addition: true,
    subtraction: false,
    multiplication: true,
    division: false,
};
const defaultSettings = {
    settingOperation,
    settingLevel: 1,
    settingHistory: true,
    settingAutoCheck: true,
    settingSound: true,
};

export default function settings(state = defaultSettings, action) {
    switch (action.type) {
        case ADDITION:
            return {
                ...state,
                settingOperation: {
                    ...state.settingOperation,
                    addition: !state.settingOperation.addition,
                },
            };
        case SUBTRACTION:
            return {
                ...state,
                settingOperation: {
                    ...state.settingOperation,
                    subtraction: !state.settingOperation.subtraction,
                },
            };
        case MULTIPLICATION:
            return {
                ...state,
                settingOperation: {
                    ...state.settingOperation,
                    multiplication: !state.settingOperation.multiplication,
                },
            };
        case DIVISION:
            return {
                ...state,
                settingOperation: {
                    ...state.settingOperation,
                    division: !state.settingOperation.division,
                },
            };
        case LEVEL_CHANGE:
            return {
                ...state,
                settingLevel: action.level,
            };
        case HISTORY_STATUS:
            return {
                ...state,
                settingHistory: !state.settingHistory,
            };
        case AUTO_CHECK:
            return {
                ...state,
                settingAutoCheck: !state.settingAutoCheck,
            };
        case SOUND:
            return {
                ...state,
                settingSound: !state.settingSound,
            };
        default:
            return state;
    }
}
