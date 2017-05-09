
import {combineReducers} from 'redux';  
import blogs from './blogReducer';

const rootReducer = combineReducers({  
  // short hand property names
  blogs
})

export default rootReducer;  