import { Todo } from '../models/Todo';
import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';


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

const getPhotos = () => {
   return axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function (response) {
      return response.data
  })
  .catch(function (error) {
      console.log(error);
  });

}
 

/*export const showPhotos = (id) => {
  getPhotos.then(
    return {
      type: actionTypes.SHOW_PHOTOS,
      id: id
    }
    )
}
*/



export const showPhotos = (id) => (dispatch, getState) => {
  return getPhotos().then(response => {
    dispatch({
        type: actionTypes.SHOW_PHOTOS,
        data: response
      })
  })
}

export const submitPhoto = (uploadedPhoto) => (dispatch, getState) => {
   return axios.post('https://jsonplaceholder.typicode.com/posts',
    {
      uploadedPhoto: uploadedPhoto
    })
    .then(function (response) {
      return response.data
    }).then(function (response) {
      dispatch({
        type: actionTypes.SET_POST_RESULT,
        data: response
      })
  })
}
