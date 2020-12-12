import { combineReducers } from 'redux';

import basicReducer from './slices/basic';

export default combineReducers({
  basic: basicReducer,
});
