import {
  combineReducers
} from 'redux';
import home from './home';

export default asyncReducers =>
  combineReducers({
    home,
    ...asyncReducers
  });
