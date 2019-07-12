import {combineReducers} from 'redux';
import userReducer from './user';
import root from './root';
export default combineReducers({
  userReducer,
  root
});
