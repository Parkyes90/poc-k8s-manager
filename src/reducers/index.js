import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordsReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
