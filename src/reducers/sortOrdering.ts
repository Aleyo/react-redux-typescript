import { Todo } from '../models/Todo';
import { SORT_TODOS } from '../constants/actionTypes';



const sortTodos = (todos, order) => {
  return todos.sort(
    (todo_prev, todo_next) => {   
      const todo_prev_priority = parseInt(todo_prev.priority);
      const todo_next_priority = parseInt(todo_next.priority);
      console.warn(todo_prev_priority);
      
      if (order == 'ASC') {
          if ( todo_prev_priority < todo_next_priority ) {
            return -1;
          }
          if ( todo_prev_priority > todo_next_priority ) {
            return 1;
          }
          return 0;
        
    } else {
          if ( todo_prev_priority < todo_next_priority ) {
            return 1;
          }
          if ( todo_prev_priority > todo_next_priority ) {
            return -1;
          }
          return 0;
        }
    }
  )

}



const sortOrdering = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case SORT_TODOS:
      console.warn(state);
      console.warn(sortTodos(state, action.order));
      return sortTodos(state, action.order);
    default:
      return state;
  }
};

export default sortOrdering;