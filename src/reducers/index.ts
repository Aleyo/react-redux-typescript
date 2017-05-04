import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sortOrdering from './sortOrdering';
import showPhotos from './showPhotos';
import albumEntryReducer from './albumEntryReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  sortOrdering,
  showPhotos,
  uploadedPhotos : albumEntryReducer
});

export default rootReducer;
