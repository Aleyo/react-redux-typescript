import { Todo } from '../models/Todo';
import { SORT_TODOS } from '../constants/actionTypes';







const sortOrdering = (state: String = "ASC", action: any) => {
  switch (action.type) {
    case SORT_TODOS:
      console.warn(state);
      return action.order;//sortTodos(state, action.order);
    default:
      return state;
  }
};

export default sortOrdering;