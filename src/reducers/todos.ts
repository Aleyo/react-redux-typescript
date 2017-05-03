import { Todo } from '../models/Todo';
import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_PRIORITY, SORT_TODOS } from '../constants/actionTypes';

const todo = (state: Todo, action: any) => {
  switch (action.type) {
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    case SET_PRIORITY:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        priority: action.priority
      });


    default:
      return state;
  }
};


const sortTodos = (todos: Todo[], order: string) => {
  return todos.sort(
    (todo_prev, todo_next) => {
      const todo_prev_priority = todo_prev.priority;
      const todo_next_priority = todo_next.priority;

      if (order === 'ASC') {
        if (todo_prev_priority < todo_next_priority) {
          return -1;
        }
        if (todo_prev_priority > todo_next_priority) {
          return 1;
        }
        return 0;

      } else {
        if (todo_prev_priority < todo_next_priority) {
          return 1;
        }
        if (todo_prev_priority > todo_next_priority) {
          return -1;
        }
        return 0;
      }
    }
  )

}

const todos = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case LOAD_TODOS:
      return action.todos;

    case SORT_TODOS:
      return sortTodos(state, action.order);

    case ADD_TODO:
      const newTodo: Todo = {
        id: getLastId(state) + 1,
        completed: false,
        text: action.text,
        priority: 1
      };
      return [
        ...state,
        newTodo
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));

    case DELETE_TODO:
      return state.filter(t => t.id !== action.id);

    case SET_PRIORITY:
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};


function getLastId(todos: Todo[]): number {
  let id = 1;
  todos.forEach(todo => {
    if (todo.id > id) {
      id = todo.id;
    }
  });
  return id;
}

export default todos;
