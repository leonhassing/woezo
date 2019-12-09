import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import browseReducer from './browseReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  browse: browseReducer
});
