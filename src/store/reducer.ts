import { combineReducers } from 'redux';
import mainReducer from '../components/Theme/state/slice';
import projectReducer from './projectDetails/slice';

export default combineReducers({
  main: mainReducer,
  project: projectReducer,
});
