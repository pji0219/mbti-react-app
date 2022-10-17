import { combineReducers } from 'redux';
import mbti from './modules/mbti';
import show from './modules/show';

export default combineReducers({
  mbti,
  show,
});
