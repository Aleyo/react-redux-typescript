import { Todo } from '../models/Todo';
import * as actionTypes from '../constants/actionTypes';


export const setVisibilityFilter = (filter: string) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};



export const addTodo = (text: string)  => {
  return {
    type: actionTypes.ADD_TODO,
    text: text
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id: id
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: actionTypes.DELETE_TODO,
    id: id
  }
};

export const setPriority = (id: number, priority: number) => {
  return {
    type: actionTypes.SET_PRIORITY,
    id, //je to stejný jako id: id
    priority
  }
};

export const sortTodos = (order) => {
  return {
    type: actionTypes.SORT_TODOS,
    order
  }
};

