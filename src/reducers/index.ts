import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sortOrdering from './sortOrdering';
import showPhotos from './showPhotos';
import albumEntryReducer from './albumEntryReducer';
import showMessages from './showMessages';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  sortOrdering,
  showPhotos,
  uploadedPhotos : albumEntryReducer,
  showMessages
});

export default rootReducer;
