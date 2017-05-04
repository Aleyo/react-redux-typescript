import { SET_POST_RESULT } from '../constants/actionTypes';

const submitPhoto = (state: Object = {}, action: any) => {
  switch(action.type) {
    case SET_POST_RESULT:
       const uploadedPhoto = action.data
      return { ...state, uploadedPhoto };
    default:
      return state;
    }
}

export default submitPhoto;
