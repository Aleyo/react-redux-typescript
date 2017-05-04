import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sortOrdering from './sortOrdering';
import showPhotos from './showPhotos';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  sortOrdering,
  showPhotos
});

export default rootReducer;
