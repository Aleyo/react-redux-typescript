
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sortOrdering from './sortOrdering';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  sortOrdering
});

export default rootReducer;
