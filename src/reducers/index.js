import { combineReducers } from 'redux';
import settings from './settings';
import mathObj from './mathObj';
import userAnswer from './userAnswer';
import history from './history';

export default combineReducers({ settings, mathObj, userAnswer, history });
